"use client";
import React, { useState } from 'react';

const CustomerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tableData, setTableData] = useState([]); // State for the table data

  const customers = [
    { id: 1, name: 'Paracetamol 500 mg', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', 
        vendor:'Marg pharmachy', exp:'10/28', type:'Tab', available: 15 },
    { id: 2, name: 'Paracetamol 600 mg', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 3, name: 'Paracetamol 250 mg', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 4, name: 'Telmo 250', batchNo: 'BCH1234', mrp: 54.20, pack: '15 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 5, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 6, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 7, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 8, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 9, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 10, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 11, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 12, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
    { id: 13, name: 'Paracetamol', batchNo: 'BCH1234', mrp: 54.20, pack: '10 pack', hsnNo:'30049810', vendor:'Marg pharmachy', exp:'10/28' },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    if (e.target.value === "") {
        setSearchResults([]);
        return;
    }

    const results = customers.filter((customer) => {
      const searchString = `${customer.name} ${customer.age} ${customer.phone}`.toLowerCase();
      return searchString.includes(e.target.value.toLowerCase());
    });
    setSearchResults(results);
  };

  const handleResultClick = (customer) => {
    setTableData([customer]); // Sets the table data with the clicked customer
    setSearchResults([]); // Clear search results after selection
    setSearchTerm(""); // Clear search input
  };

  return (
    <div className="container mx-auto p-4 sticky md:w-1/2 top-20 z-50">
      <div className="relative">
        <input
          type="text"
          placeholder="Search medicine..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {searchResults.length > 0 && (
        <ul className="absolute w-full bg-white z-20 max-h-48 overflow-y-auto mt-4 border rounded-md shadow-sm">
          {searchResults.map((customer) => (    
            <li
              key={customer.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleResultClick(customer)} // Handle click
            >
              <p className="font-medium">{customer.name}</p>
              <p className="text-gray-500">Exp: {customer.exp}, Batch No: {customer.batchNo}, MRP: {customer.mrp}</p>
            </li>
          ))}
        </ul>
      )}

        {searchResults.length === 0 && searchTerm !== "" && (
            <p className="mt-1 absolute text-gray-500">No item found.</p>
        )}


      {/* <table className="mt-4 w-full border-collapse table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Age</th>
            <th className="px-4 py-2 border">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((customer, index) => ( // Map over tableData
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{customer.name}</td>
              <td className="px-4 py-2 border">{customer.age}</td>
              <td className="px-4 py-2 border">{customer.phone}</td>
            </tr>
          ))}
           {tableData.length === 0 && (
            <tr>
              <td colSpan="3" className="px-4 py-2 border text-center">No data yet</td>
            </tr>
          )}
        </tbody>
      </table> */}
    </div>
  );
};

export default CustomerSearch;