import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutocompleteData, clearAutocompleteData } from '../redux/apiSlice';
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

  const handleClear = () => {
    // console.log("handleclear")
    dispatch(clearAutocompleteData()); // Dispatch the clear action
    setIsPopupOpen(false)
  };


  // Focus the search input when the popup opens
  useEffect(() => {
    if (isPopupOpen && searchInputRef.current) {
      searchInputRef.current.focus(); // Focus the search input when the popup opens
    }
  }, [isPopupOpen]);

  if (autocompleteData) {
    Object.keys(autocompleteData).map(key => {
      console.log(autocompleteData[key].data)
    })
    // console.log(autocompleteData)
  }
  // JSX for the header
  return (
    <header className="header">
      <div className="logo">MyApp</div>

      {/* Search Button in the Header */}

      <div className="search-container">
        <div className="search-icon" onClick={() => setIsPopupOpen(true)}>
          <i className="fas fa-search"></i> {/* Font Awesome search icon */}
        </div>
      </div>

      {/* Full-Screen Popup */}
      {isPopupOpen && (
        <div className="popup-window full-screen-popup">
          <div className="popup-content">
            {/* Search Input Inside Popup */}
            <div className="search-bar">
              <input
                ref={searchInputRef} // This input will get focused when the popup opens
                type="text"
                className="popup-search-box"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />

              {/* Close Icon */}
              <button
                className="close-popup"
                onClick={() => handleClear()}
              >
                <i className="fas fa-times"></i> {/* Font Awesome close icon */}
              </button>
            </div>
            <div class="loading-wrapper">
              <div class="loading-dot"></div>
              <span class="loading-text">
                Loading
              </span>
            </div>
            {loading && <div class="loading-wrapper">
              <div class="loading-dot"></div>
              <span class="loading-text">
                Loading
              </span>
            </div>} {/* Show loading message */}
            {error && <p>Error: {error}</p>} {/* Show error message */}
            {autocompleteData != null ? (


              // Object.keys(autocompleteData).map((key) => (
              //   <div className="suggestions-box">
              //     {autocompleteData[key].data.map((suggestion, index) => (
              //       <div key={index} className="suggestion-item">
              //         <img src={suggestion.image} alt={suggestion.title} className="suggestion-image" />
              //         <span className="suggestion-title">{suggestion.title}</span>
              //       </div>
              //     ))}
              //   </div>
              // ))
              <div className="suggestions-container">
                <div className="suggestions-box">
                  <div className="suggestions-header">
                    <h2>Top Result</h2>
                    <button className="view-all-button">View All</button>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-150x150.jpg" alt="Leo (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Original Motion Picture Soundtrack)</p>
                      <p>Tamil Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/046/Leo-Telugu-Original-Motion-Picture-Soundtrack-English-2023-20231020123601-150x150.jpg" alt="Leo (Telugu) (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Telugu) (Original Motion Picture Soundtrack)</p>
                      <p>Telugu Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/109/Leo-Das-Entry-From-Leo-Tamil-2024-20240108151125-150x150.jpg" alt="Leo Das Entry (From 'Leo')" />
                    <span> <p>Leo Das Entry (From "Leo")</p>
                      <p>Tamil Song · Leo Das Entry (From "Leo")</p></span>
                  </div>
                </div>
                <div className="suggestions-box">
                  <div className="suggestions-header">
                    <h2>Top Result</h2>
                    <button className="view-all-button">View All</button>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-150x150.jpg" alt="Leo (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Original Motion Picture Soundtrack)</p>
                      <p>Tamil Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/046/Leo-Telugu-Original-Motion-Picture-Soundtrack-English-2023-20231020123601-150x150.jpg" alt="Leo (Telugu) (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Telugu) (Original Motion Picture Soundtrack)</p>
                      <p>Telugu Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/109/Leo-Das-Entry-From-Leo-Tamil-2024-20240108151125-150x150.jpg" alt="Leo Das Entry (From 'Leo')" />
                    <span> <p>Leo Das Entry (From "Leo")</p>
                      <p>Tamil Song · Leo Das Entry (From "Leo")</p></span>
                  </div>
                </div>
                <div className="suggestions-box">
                  <div className="suggestions-header">
                    <h2>Top Result</h2>
                    <button className="view-all-button">View All</button>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-150x150.jpg" alt="Leo (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Original Motion Picture Soundtrack)</p>
                      <p>Tamil Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/046/Leo-Telugu-Original-Motion-Picture-Soundtrack-English-2023-20231020123601-150x150.jpg" alt="Leo (Telugu) (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Telugu) (Original Motion Picture Soundtrack)</p>
                      <p>Telugu Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/109/Leo-Das-Entry-From-Leo-Tamil-2024-20240108151125-150x150.jpg" alt="Leo Das Entry (From 'Leo')" />
                    <span> <p>Leo Das Entry (From "Leo")</p>
                      <p>Tamil Song · Leo Das Entry (From "Leo")</p></span>
                  </div>
                </div>
                <div className="suggestions-box">
                  <div className="suggestions-header">
                    <h2>Top Result</h2>
                    <button className="view-all-button">View All</button>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-150x150.jpg" alt="Leo (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Original Motion Picture Soundtrack)</p>
                      <p>Tamil Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/046/Leo-Telugu-Original-Motion-Picture-Soundtrack-English-2023-20231020123601-150x150.jpg" alt="Leo (Telugu) (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Telugu) (Original Motion Picture Soundtrack)</p>
                      <p>Telugu Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/109/Leo-Das-Entry-From-Leo-Tamil-2024-20240108151125-150x150.jpg" alt="Leo Das Entry (From 'Leo')" />
                    <span> <p>Leo Das Entry (From "Leo")</p>
                      <p>Tamil Song · Leo Das Entry (From "Leo")</p></span>
                  </div>
                </div>

                <div className="suggestions-box">
                  <h2>ALBUMS</h2>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-150x150.jpg" alt="Leo (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Original Motion Picture Soundtrack)</p>
                      <p>Tamil Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/639/Leo-Punjabi-2024-20240103121125-150x150.jpg" alt="Leo" />
                    <span><p>Leo</p>
                      <p>Punjabi Album · 2024 · Shubh</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/046/Leo-Telugu-Original-Motion-Picture-Soundtrack-English-2023-20231020123601-150x150.jpg" alt="Leo (Telugu) (Original Motion Picture Soundtrack)" />
                    <span><p>Leo (Telugu) (Original Motion Picture Soundtrack)</p>
                      <p>Telugu Album · 2023 · Anirudh Ravichander</p></span>
                  </div>
                </div>

                <div className="suggestions-box">
                  <h2>SONGS</h2>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/109/Leo-Das-Entry-From-Leo-Tamil-2024-20240108151125-150x150.jpg" alt="Leo Das Entry (From 'Leo')" />
                    <span><p>Leo Das Entry (From "Leo")</p>
                      <p>Tamil Song · Leo Das Entry (From "Leo")</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/916/Ordinary-Person-From-Leo-Tamil-2023-20231023221744-150x150.jpg" alt="Ordinary Person (From 'Leo')" />
                    <span><p>Ordinary Person (From "Leo")</p>
                      <p>Tamil Song · Ordinary Person (From "Leo")</p></span>
                  </div>
                  <div className="suggestions-card">
                    <img src="https://c.saavncdn.com/435/Leo-Hindi-2021-20210817104943-150x150.jpg" alt="Leo" />
                    <span><p>Leo</p>
                      <p>Hindi Song · Leo · Surmani Agni Verma</p></span>
                  </div>
                </div>
              </div>

            ) : (
              <p className="no-results">No results found</p>
            )}


          </div>
        </div>
      )}
    </header>
  );
}

export default header;
