import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated hook
import { addProperty } from '../services/api';  // This should be implemented in your API service

const AddProperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: '',
    price: '',
    location: '',
    type: '',
    size: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Updated hook for navigation

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await addProperty(propertyData); // API call to add property
      if (response) {
        // Redirect to the properties list page after successful submission
        navigate('/properties');
      }
    } catch (err) {
      setError('Failed to add property. Please try again.');
      console.error('Error adding property:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-6">Add New Property</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={propertyData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={propertyData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={propertyData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={propertyData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium">Size (in sq. ft.)</label>
          <input
            type="number"
            id="size"
            name="size"
            value={propertyData.size}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={propertyData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Adding Property...' : 'Add Property'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
