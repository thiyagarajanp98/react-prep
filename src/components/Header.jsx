import React, { useState } from "react";
import './Header.css';
import Popup from "./Popup";
import { clearAutocompleteData } from "../redux/apiSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dispatch = useDispatch();

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => {
        setIsPopupOpen(false)
        dispatch(clearAutocompleteData());
    };
    return (
        <header className="header">
            <div className="logo"><svg class="icons_logo___3E8f" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.8252 20.984C31.4746 20.984 32.0004 18.6907 32.0004 15.9011C32.0004 13.1737 31.4746 10.9111 30.8252 10.9111C30.2065 10.9111 29.6816 13.1114 29.6816 15.9011C29.6807 18.6907 30.1759 20.984 30.8252 20.984Z" fill="currentColor"></path>
                <path d="M27.1145 15.901C27.1145 21.7582 26.0322 26.4999 24.6415 26.4999C23.2815 26.4999 22.137 21.7582 22.137 15.901C22.137 10.0437 23.2499 5.302 24.6415 5.302C26.0322 5.302 27.1145 10.0437 27.1145 15.901Z" fill="currentColor"></path>
                <path d="M2.31876 15.9011C2.31876 18.6898 1.79295 20.984 1.17519 20.984C0.525817 20.984 0 18.6284 0 15.9011C0 13.1737 0.525817 10.9111 1.17519 10.9111C1.7939 10.9121 2.31876 13.1124 2.31876 15.9011Z" fill="currentColor"></path>
                <path d="M9.83104 15.901C9.83104 21.7582 8.71812 26.4999 7.35808 26.4999C5.93579 26.4999 4.85352 21.7582 4.85352 15.901C4.85352 10.0437 5.99709 5.302 7.35808 5.302C8.71812 5.302 9.83104 10.0437 9.83104 15.901Z" fill="currentColor"></path>
                <path d="M15.9847 31.397C18.0247 31.397 19.6022 24.455 19.6022 15.902C19.6022 7.41041 18.0257 0.5 15.9847 0.5C13.9446 0.5 12.3672 7.34908 12.3672 15.902C12.3672 24.455 13.9446 31.397 15.9847 31.397Z" fill="currentColor"></path>
            </svg></div>

            {/* Search Button in the Header */}

            <div className="search-container">
                <div className="search-icon" onClick={openPopup}>
                    <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                </div>
            </div>
            <Popup isOpen={isPopupOpen} closePopup={closePopup} />
        </header>
    )
}

export default Header;