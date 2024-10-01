import React from "react";
import CardContainer from "./CardContainer";
import './AlbumContainer.css'; 
const AlbumContainer = ({ titles, launchData }) => {
  return (
    <div className="container">
      <h1 className="album-title">{titles}</h1>
      <div className="album-card-container">
        <CardContainer launchData={launchData} />
      </div>
    </div>
  );
};

export default AlbumContainer;