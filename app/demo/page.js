"use client";
import React, { useState, useEffect } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true
      try {
        // Simulate fetching data (replace with your actual API call)
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            const mockData = [
              { id: 1, name: 'Apple' },
              { id: 2, name: 'Banana' },
              { id: 3, name: 'Orange' },
              { id: 4, name: 'Grape' },
              { id: 5, name: 'Watermelon' },
              { id: 6, name: 'Apricot' },
              { id: 7, name: 'Avocado' },
              { id: 8, name: 'Abhishe' },
              { id: 9, name: 'avvvv' },
              { id: 10, name: 'Apple' },
              { id: 11, name: 'Apple' },
              { id: 12, name: 'Apple' },
              { id: 13, name: 'Apple' },
            ];
            const filteredResults = mockData.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            resolve(filteredResults);
          }, 500); // Simulate a 500ms delay
        });

        setSearchResults(response);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, e.g., display an error message
        setSearchResults([]); // Clear the search results in case of error
      } finally {
        setIsLoading(false); // Set loading to false regardless of outcome
      }
    };


    if (searchTerm) { // Only fetch if search term is not empty
      fetchData();
    } else {
      setSearchResults([]); // Clear results if search term is empty
    }
  }, [searchTerm]); // This makes the effect run whenever searchTerm changes


  return (
    <div className="relative w-full md:w-1/2 mx-auto  p-4"> {/* Added relative for positioning */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* {isLoading && <div className="mt-2 text-gray-500">Loading...</div>} Display loading indicator */}

      {searchResults.length > 0 && (
        <ul className=" absolute backdrop-blur-md top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto z-10"> {/* Absolute positioning */}
          {searchResults.map((result) => (
            <li
              key={result.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearchTerm(result.name); // Set search term to selected result
                setSearchResults([]);       // Clear results after selection
              }}
            >
              {result.name} + "Abhishek"
            </li>
          ))}
        </ul>
      )}

      {/* {searchResults.length === 0 && searchTerm !== "" && !isLoading && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 px-4 py-2">
          No results found.
        </div>
      )} */}

    </div>
  );
}

export default SearchComponent;