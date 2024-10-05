import React from 'react';
import './AlbumDetails.css';  // Import the CSS file

const AlbumDetails = () => {
    return (
        <div className="containerStyle">
            <div className="backgroundImageStyle"></div>
            <div className="overlayStyle"></div>
            <div className="contentStyle">
                <div className="album-containerstyle">
                    <div className="album-imagestyle">
                        <img
                            src="https://c.saavncdn.com/275/Raayan-Tamil-2024-20240706124553-500x500.jpg?bch=480042"
                            alt="Raayan Album Cover"
                        />
                    </div>

                    <div className="album-infostyle">
                        <h1>Raayan</h1>
                        <p>by A.R. Rahman · 5 Songs · 12,234,964 Plays · 17:57</p>
                        <p>(C) 2024 Sun Pictures</p>

                        <div className="album-actionsstyle">
                            <button className="play-button">Play</button>
                            <button className="action-button"><i class="fa fa-heart fa-lg" aria-hidden="true"></i></button>
                            <button className="action-button"><i class="fa fa-ellipsis-v fa-lg" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AlbumDetails;
