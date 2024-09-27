import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutocompleteData } from '../redux/apiSlice';
import '../App.css'
const header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // To track popup state
  const [searchTerm, setSearchTerm] = useState(''); // To store search input
  // const [searchResults, setSearchResults] = useState([]); // Dummy search results
  const searchInputRef = useRef(null); // Reference to the popup search input

  const dispatch = useDispatch();

  // Get the autocomplete data and status from Redux store

  const { autocompleteData, loading, error } = useSelector((state) => state.launch);
  // Handle input change and update search results based on input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Mock search functionality - filtering based on input
    if (value.trim()) {
      dispatch(fetchAutocompleteData(value));
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
            {loading && <p>Loading...</p>} {/* Show loading message */}
            {error && <p>Error: {error}</p>} {/* Show error message */}
            {autocompleteData != null ? (
              <div>
                {/* Render the fetched data */}
                <pre>{JSON.stringify(autocompleteData, null, 2)}</pre>
              </div>
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
