"use client";
import React, { useState } from 'react';

const CustomerLookup = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [showAddCustomerPopup, setShowAddCustomerPopup] = useState(false);

  const customers = {  // Replace with your actual data fetching (API call, etc.)
    '1234567890': 'John Doe',
    '9876543210': 'Jane Smith',
    '5551234567': 'Peter Jones',
  };

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
    setCustomerName(''); // Clear previous name
  };

  const handleLookup = () => {
    const name = customers[mobileNumber];
    if (name) {
      setCustomerName(name);
      setShowAddCustomerPopup(false); // Close popup if customer exists
    } else {
      setCustomerName('');
      setShowAddCustomerPopup(true); // Open popup if customer doesn't exist
    }
  };

  const handleAddCustomer = (newCustomerName) => {
      // In a real application, you would send this newCustomerName and mobileNumber
      // to your backend to store the new customer data.
      console.log("Adding customer:", newCustomerName, mobileNumber);

      // For this example, we'll just update the local customers data (for demonstration purposes)
      customers[mobileNumber] = newCustomerName;
      setCustomerName(newCustomerName);
      setShowAddCustomerPopup(false);
      setMobileNumber(""); // Clear input after adding
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center">
        <input
          type="tel" // Use tel input type for mobile
          placeholder="Enter Mobile Number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={mobileNumber}
          onChange={handleMobileChange}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handleLookup}
        >
          Lookup
        </button>
      </div>

      {customerName && <p className="mt-2 font-medium">Customer Name: {customerName}</p>}

      {showAddCustomerPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"> {/* Popup Overlay */}
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-medium mb-2">Add New Customer</h2>
            <input
              type="text"
              placeholder="Enter Customer Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              id="newCustomerName" // Added ID for label association
            />
             <label htmlFor="newCustomerName" className="block text-gray-700 font-bold mb-2">
                Customer Name:
            </label>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={() => setShowAddCustomerPopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() => {
                  const newCustomerName = document.getElementById("newCustomerName").value;
                  handleAddCustomer(newCustomerName);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerLookup;