import React, { useRef, useEffect, useState } from 'react';
import './Popup.css';
import { clearAutocompleteData, fetchAutocompleteData } from '../redux/apiSlice';
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
        if(!value){
            dispatch(clearAutocompleteData());
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
                {autocompleteData != null ?
                    <div className="suggestions-container">
                        {Object.keys(autocompleteData).map(key => {
                            if (autocompleteData[key].data.length > 0) {
                                return (<div className="suggestions-box" key={key}>
                                    <div className="suggestions-header">
                                        <h3>{key}</h3>
                                        {key!="Top Results"?<button className="view-all-button">View All</button>:""}
                                    </div>
                                    {autocompleteData[key].data.slice(0, 3).map((value, index) => ( // Limit to 3 items
                                        <div className="suggestions-card" key={index}>
                                            <img src={value.image} alt={value.title} />
                                            <span>
                                                <p>{value.title}</p>
                                                <p>Tamil Album · 2023 · Anirudh Ravichander</p>
                                            </span>
                                        </div>
                                    ))}
                                </div>)
                            }
                            return null;
                        })}
                    </div>
                    : (
                        <p className="no-results">No results found</p>
                    )}

            </div>
        </div>
    );
};

export default Popup;
