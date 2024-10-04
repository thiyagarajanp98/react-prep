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
            <div className="logo">MyApp</div>

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