import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AlbumContainer from "./AlbumContainer";

const OtherDetails = () => {
    const { Details, loading, error } = useSelector((state) => state.launch);
    return (
        <>
            {Details.type == 'song' ? <>
                {Details.hasOwnProperty("You Might Like") && Details["You Might Like"].hasOwnProperty(Details.id) ? <AlbumContainer titles={"You Might Like"} launchData={Details["You Might Like"][Details.id]} /> : ""}
                {Details.hasOwnProperty("Currently Trending Songs") && Details["Currently Trending Songs"].length > 0 ? <AlbumContainer titles={"Currently Trending Songs"} launchData={Details["Currently Trending Songs"]} /> : ""}
                {Details.hasOwnProperty("Top Songs By Same Artists") && Details["Top Songs By Same Artists"].length > 0 ? <AlbumContainer titles={"Top Songs By Same Artists"} launchData={Details["Top Songs By Same Artists"]} /> : ""}
                {Details.hasOwnProperty("Top Songs By Same Actors") && Details["Top Songs By Same Actors"].length > 0 ? <AlbumContainer titles={"Top Songs By Same Actors"} launchData={Details["Top Songs By Same Actors"]} /> : ""}
            </> : Details.type == 'album' ? <>
                {Details.hasOwnProperty("You Might Like") && Details["You Might Like"].length > 0 ? <AlbumContainer titles={"You Might Like"} launchData={Details["You Might Like"]} /> : ""}
                {Details.hasOwnProperty("Currently Trending Albums") && Details["Currently Trending Albums"].length > 0 ? <AlbumContainer titles={"Currently Trending Albums"} launchData={Details["Currently Trending Albums"]} /> : ""}
                {Details.hasOwnProperty("Top Albums from Same Year") && Details["Top Albums from Same Year"].length > 0 ? <AlbumContainer titles={"Top Albums from Same Year"} launchData={Details["Top Albums from Same Year"]} /> : ""}
                {/* <AlbumContainer titles={"Artists"} launchData={Details.more_info.artistMap.artists} /> */}
            </> : <>
                {Details.hasOwnProperty("Related Playlist") && Details["Related Playlist"].length > 0 ? <AlbumContainer titles={"Related Playlist"} launchData={Details["Related Playlist"]} /> : ""}
                {Details.hasOwnProperty("Currently Trending Playlists") && Details["Currently Trending Playlists"].length > 0 ? <AlbumContainer titles={"Currently Trending Playlists"} launchData={Details["Currently Trending Playlists"]} /> : ""}
                {/* <AlbumContainer titles={"Artists"} launchData={Details.more_info.artistMap.artists} /> */}
            </>}
        </>
    )
}

export default OtherDetails