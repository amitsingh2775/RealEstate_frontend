import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../services/api';

const PropertyDetail = () => {
  const { id } = useParams();  // Extract property id from the URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getPropertyById(id); // Fetch single property
        setProperty(data);
      } catch (err) {
        setError('Error fetching property');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 my-8">
      {property ? (
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">{property.type}</h1>
          <img src={property.image} alt={property.type} className="w-full h-60 object-cover mb-4" />
          <p className="text-lg font-semibold text-gray-800 mb-2">${property.price}</p>
          <p className="text-gray-500 mb-2">Location: {property.location}</p>
          <p className="text-gray-600 mb-4">{property.description}</p>
          <p className="text-sm text-gray-400">Size: {property.size} sq. ft.</p>
        </div>
      ) : (
        <div>No property found</div>
      )}
    </div>
  );
};

export default PropertyDetail;
