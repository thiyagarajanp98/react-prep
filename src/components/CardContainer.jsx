

import React from "react";
import './CardContainer.css'; // Make sure to include the CSS

const CardContainer = ({ launchData }) => {
  return (
    <div className="card-container">
      {launchData.map((album, index) => {
        const cardClass =
          album.type === 'album' ? 'album-card' :
            album.type === 'radio_station' ? 'artist-card' :
              album.type === 'artist' ? 'artist-card' : 'album-card'

        return (
          <span key={index} >
            <div className={cardClass}>
              <img src={album.image.replace('150x150.jpg', '500x500.jpg')} alt={album.title} className="album-image" />
            </div>
            <span className="album-details">
              {album.title.replaceAll('&quot;', '"')}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default CardContainer;
