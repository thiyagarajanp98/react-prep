import React, { useEffect } from 'react';
import './AlbumDetails.css';  // Import the CSS file
import SongList from './SongList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumDetails } from '../redux/apiSlice';
import { useParams } from 'react-router-dom';

const AlbumDetails = () => {
    const { type,id } = useParams();
    const dispatch = useDispatch();
    const { albumDetails, loading, error } = useSelector((state) => state.launch);
    const secondsToTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        let timeString = '';

        if (hours > 0) {
            timeString += `${hours < 10 ? '0' : ''}${hours}:`;
        }
        timeString += `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

        return timeString;
    };
    useEffect(() => {
        if(type=='album'){
            dispatch(fetchAlbumDetails(id))
        }
    }, [dispatch]);
    // console.log(albumDetails.image.replace('150x150.jpg', '500x500.jpg'))
    return (
        <div className="containerStyle">
            <div className="backgroundImageStyle" style={{
                backgroundImage: `url(${albumDetails?.image.replace('150x150.jpg', '500x500.jpg')})` }}></div>
            <div className="overlayStyle"></div>
            {albumDetails && <div className="contentStyle">
                <div className="album-containerstyle">
                    <div className="album-imagestyle">
                        <img
                            src={albumDetails.image.replace('150x150.jpg', '500x500.jpg')}
                            alt={albumDetails.title}
                        />
                    </div>

                    <div className="album-infostyle">
                        <h1>{albumDetails.title.replaceAll('&quot;', '"')}</h1>
                        {albumDetails.type == 'song' && <><p>{albumDetails.more_info.album.replaceAll('&quot;', '"')} by {albumDetails.more_info.artistMap.primary_artists.map((data) => data.name).join(', ')}</p>
                            <p>Duration  ·  {secondsToTime(+albumDetails.more_info.duration)} sec</p></>}
                        {albumDetails.type == 'album' && <><p> by {albumDetails.more_info.artistMap.primary_artists.map((data) => data.name).join(', ')}  ·  {albumDetails.more_info.song_count} Songs</p>
                            <p>Duration  ·  {secondsToTime(albumDetails.list.map((data) => +data.more_info.duration).reduce((accumulator, currentValue) => accumulator + currentValue, 0))} sec</p></>}
                        {albumDetails.type == 'playlist' && <><p> {albumDetails.subtitle} ·  {albumDetails.list_count} Songs</p></>}

                        <div className="album-actionsstyle">
                            <button className="play-button">Play</button>
                            <button className="action-button"><i className="fa fa-heart fa-lg" aria-hidden="true"></i></button>
                            <button className="action-button"><i className="fa fa-ellipsis-v fa-lg" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                <SongList />
            </div>}

        </div>
    );
};

export default AlbumDetails;
