import React, { useRef, useEffect, useState } from 'react';
import './Popup.css';
import { fetchAutocompleteData } from '../redux/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
const Popup = ({ isOpen, closePopup }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const popupRef = useRef(null); // Reference for the popup content
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();

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

    // Close the popup if clicked outside
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus(); // Focus the search input when the popup opens
        }
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup(); // Call the function to close the popup
            }
        };

        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closePopup]);

    // Do not render anything if the popup is not open
    if (!isOpen) return null;

    return (
        <div className="popup-window">
            <div className="popup-content" ref={popupRef}>
                <div className="search-bar">
                    <input
                        type="text"
                        ref={searchInputRef}
                        className="popup-search-box"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="close-popup" onClick={closePopup}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                {loading && <Loading />}
                {error && <p>Error: {error}</p>}
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
    );
};

export default Popup;
