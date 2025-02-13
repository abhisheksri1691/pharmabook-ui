import Image from 'next/image';
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Table from './Table';
import Billing from './Billing';

const NavigationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('Dashboard'); // State for active content

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (content) => {
    setActiveContent(content);
    if (window.innerWidth < 768) { // Close drawer on smaller screens after click
      setIsOpen(false);
    }
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'Dashboard':
        return <Dashboard></Dashboard>;
      case 'Billing':
        return <Billing></Billing>;
      case 'Invoices':
        return <div><h2>Invoices</h2><p>List of invoices and details.</p></div>;
      case 'Customer List':
        return <div><h2>Customer List</h2><p>Table or list of customers.</p></div>;
      default:
        return <div><h2>Dashboard</h2><p>Default dashboard content.</p></div>; // Default
    }
  };

  return (
    <div className=" bg-gray-100">
    <header className="bg-white shadow-md fixed top-0 left-52  right-0 z-50">
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
          

          {/* Profile Section */}
          <div className="flex items-end   space-x-2">
            <img
              src="profile.png" // Replace with your profile image URL
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

      <div
        className={` bg-white fixed top-0 left-0 h-full z-50 shadow-md ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:w-52 md:border-r `} // Changed widths here
      >
        {/* ... (Drawer content - header, nav, close button - same as before) */}
        <div className=" px-4 py-6">
          <img src='Logo.png' />
        </div>

        <nav className="p-6">
          {/* ... (Navigation links - same as before) */}
          <a
            href="#"
            className={`block px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white ${activeContent === 'Dashboard' ? 'bg-blue-600 font-semibold  text-white' : '' // Highlight active link
              }`}
            onClick={() => handleNavItemClick('Dashboard')} // Set active content
          >
            Dashboard
          </a>
          <a
            href="#"
            className={`block px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white ${activeContent === 'Billing' ? 'bg-blue-600 font-semibold  text-white' : ''
              }`}
            onClick={() => handleNavItemClick('Billing')}
          >
            Billing
          </a>
          <a
            href="#"
            className={`block px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white ${activeContent === 'Invoices' ? 'bg-blue-600 font-semibold hover:text-white text-white' : ''
              }`}
            onClick={() => handleNavItemClick('Invoices')}
          >
            Invoices
          </a>
          <a
            href="#"
            className={`block px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white ${activeContent === 'Customer List' ? 'bg-blue-600 font-semibold hover:text-white text-white' : ''
              }`}
            onClick={() => handleNavItemClick('Customer List')}
          >
            Customer List
          </a>
        </nav>

        <button onClick={toggleDrawer} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>

      <div className="md:ml-56 mr-4 h-full  transition-all duration-300 mt-12"> {/* Changed margin-left here */}
        {renderContent()}
      </div>
    </div>
  );
};

export default NavigationDrawer;