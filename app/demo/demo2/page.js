"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Fixed Header */}
      <header className="bg-white shadow-md fixed top-0 left-64  right-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Hamburger Icon */}
          <button onClick={toggleDrawer} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
            <span className="text-xl font-bold">My App</span> {/* Your App Name/Logo */}

          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40" // Replace with your profile image URL
              alt="Profile"
              className="rounded-full h-8 w-8"
            />
            <div className="relative">
              <button className="flex items-center">
                <span className="mr-1">User Name</span> {/* Display User Name */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu (Hidden by default) */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden"> {/* Add 'hidden' class initially */}
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Navigation Drawer (Sidebar) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`} // Transition and conditional classes
      >
        <div className="p-4">
          {/* Drawer Header (Optional) */}
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          {/* Navigation Links */}
          <ul>
            <li className="mb-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Products</a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>

      {/* Main Content (Adjust padding-top to account for header) */}
      <main className="pt-16 md:pl-64 p-4"> {/* Added padding for header and sidebar */}
        <div className="container mx-auto">
          {/* Your main content goes here */}
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p className="mt-4">This is where your main application content will be displayed.</p>
        </div>
      </main>
    </div>
  );
};

export default Navbar;