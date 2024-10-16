import React, { useState, useEffect } from 'react';
import { getProperties } from '../services/api';
import { Link } from 'react-router-dom';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();  // Fetch properties from the backend
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Properties for Sale</h2>

      {loading ? (
        <div className="text-center text-xl text-gray-600">Loading properties...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length > 0 ? (
            properties.map((property) => (
              <div
                key={property._id}
                className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={property.image}  // Placeholder for property image
                  alt="Property"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{property.type}</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-3">${property.price.toLocaleString()}</p>
                  <p className="text-gray-600 mb-3"><strong>Location:</strong> {property.location}</p>
                  <p className="text-gray-500 mb-3"><strong>Description:</strong> {property.description}</p>
                  <p className="text-sm text-gray-400"><strong>Size:</strong> {property.size} sq. ft.</p>
                </div>
                <div className="p-6 bg-gray-100 rounded-b-lg flex justify-between items-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none">
                  <Link to={`/properties/${property._id}`} className="text-white-500 hover:underline">
                    View Details
                    </Link>
                  </button>
                  <span className="text-gray-400 text-sm">{new Date(property.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-600">No properties found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
