

import React from "react";
import './CardContainer.css'; // Make sure to include the CSS
import { Link } from "react-router-dom";

const CardContainer = ({ launchData }) => {
  // console.log(launchData[0].perma_url.split('/').pop())
  return (
    <div className="card-container">
      {launchData.map((album, index) => {
        const cardClass =
          album.type === 'album' ? 'album-card' :
            album.type === 'radio_station' ? 'artist-card' :
              album.type === 'artist' ? 'artist-card' : 'album-card'

        return (
          <Link to={`/details/${album.type}/${album.perma_url.split('/').pop()}`} key={index}>
            <span>
              <div className={cardClass}>
                <img src={album.image.replace('150x150.jpg', '500x500.jpg')} alt={album.title} className="album-image" />
              </div>
              <span className="album-details">
                {album.title.replaceAll('&quot;', '"')}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default CardContainer;
