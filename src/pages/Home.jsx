import React from 'react';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Welcome to the Real Estate Portal</h2>
      <PropertyList />
    </div>
  );
};

export default Home;
