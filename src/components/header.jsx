import React, { useState, useRef, useEffect } from 'react';
import '../App.css'
const header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // To track popup state
    const [searchTerm, setSearchTerm] = useState(''); // To store search input
    const [searchResults, setSearchResults] = useState([]); // Dummy search results
    const searchInputRef = useRef(null); // Reference to the popup search input
  
    // Sample data for search results
    const sampleData = ['Apple', 'Banana', 'Grapes', 'Orange', 'Mango'];
  
    // Handle input change and update search results based on input
    const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
  
      // Mock search functionality - filtering based on input
      if (value.length > 0) {
        setSearchResults(
          sampleData.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
          )
        );
      } else {
        setSearchResults([]);
      }
    };
  
    // Focus the search input when the popup opens
    useEffect(() => {
      if (isPopupOpen && searchInputRef.current) {
        searchInputRef.current.focus(); // Focus the search input when the popup opens
      }
    }, [isPopupOpen]);
  
    // JSX for the header
    return (
      <header className="header">
        <div className="logo">MyApp</div>
  
        {/* Search Button in the Header */}
        <div className="search-container">
          <button className="search-button" onClick={() => setIsPopupOpen(true)}>
            Search
          </button>
        </div>
  
        {/* Full-Screen Popup */}
        {isPopupOpen && (
          <div className="popup-window full-screen-popup">
            <div className="popup-content">
              {/* Search Input Inside Popup */}
              <input
                ref={searchInputRef} // This input will get focused when the popup opens
                type="text"
                className="popup-search-box"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {searchResults.length > 0 ? (
                <ul className="search-results">
                  {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              ) : (
                <p className="no-results">No results found</p>
              )}
              {/* Close Button to Exit the Popup */}
              <button
                className="close-popup"
                onClick={() => setIsPopupOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>
    );
  }

export default header;
