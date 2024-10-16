import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Retrieve user data from localStorage
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user state if logged in
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null); // Reset user state after logout
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Real Estate</h1>
        <div className="flex items-center space-x-4">
          <Link to="/properties" className="hover:text-gray-400">Properties</Link>

          {/* Check if the user is logged in */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">Hello, {user.name}</span> {/* Show user name */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
              <span>
              <Link to="/add-property" className="hover:text-gray-400">Add-property</Link>
              </span>

            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/login" className="hover:text-gray-400">Login</Link>
              <Link to="/register" className="hover:text-gray-400">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
