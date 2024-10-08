import React, { useEffect, useRef } from 'react';
import './Details.css';  // Import the CSS file
import SongList from './SongList';
import { useDispatch, useSelector } from 'react-redux';
import { clearDetailsData, fetchDetails, fetchOtherDetails, fetchSingleAlbumDetails } from '../redux/apiSlice';
import { useParams } from 'react-router-dom';
import OtherDetails from './OtherDetails';

const Details = () => {
    const { type, id } = useParams();
    const dispatch = useDispatch();
    const hasProcessed = useRef(false);
    const { SingleAlbumDetails,Details, loading, error } = useSelector((state) => state.launch);
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
    const fetchMultipleDetails = async (ids) => {
        try {
            // Create an array of promises for each ID
            const promises = ids.map(id =>
                dispatch(fetchOtherDetails()).unwrap() // Unwrap to get the resolved value
            );

            // Wait for all promises to resolve
            const results = await Promise.all(promises);

            // Handle the results (results will be an array of responses)
            console.log("All responses received:", results);
        } catch (error) {
            console.error("Error fetching details:", error);
        }
    };
    useEffect(() => {

        dispatch(fetchDetails({ type: type, id: id }))
        return () => {
            dispatch(clearDetailsData())
        }
    }, [dispatch]);

    useEffect(() => {
        if (Details && !hasProcessed.current) {
            hasProcessed.current = true; // Mark as processed

            const sortedAlbumArray = Object.entries(Details.modules).sort(([, a], [, b]) => {
                return (a.position || 999) - (b.position || 999); // Default to 999 if position is missing
            });
            const sortedAlbums = Object.fromEntries(sortedAlbumArray);

            if(!Array.isArray(Details.list)){
                console.log(Details.more_info.album_url.split('/').pop())
                dispatch(fetchSingleAlbumDetails({id:Details.more_info.album_url.split('/').pop()}))
            }
            Object.keys(sortedAlbums).forEach((key) => {
                if (key !== 'artists' && key !== 'list') {
                    dispatch(
                        fetchOtherDetails({
                            title: sortedAlbums[key].title,
                            source: sortedAlbums[key].source,
                            data: new URLSearchParams(sortedAlbums[key].source_params).toString(),
                        })
                    );
                }
            });
        }
    }, [Details, dispatch]);
    console.log(Details)
    console.log("____________________________________")
    console.log(SingleAlbumDetails)
    return (
        <div className="containerStyle">
            <div className="backgroundImageStyle" style={{
                backgroundImage: `url(${Details?.image.replace('150x150.jpg', '500x500.jpg')})`
            }}></div>
            <div className="overlayStyle"></div>
            {Details && <div className="contentStyle">
                <div className="album-containerstyle">
                    <div className="album-imagestyle">
                        <img
                            src={Details.image.replace('150x150.jpg', '500x500.jpg')}
                            alt={Details.title}
                        />
                    </div>

                    <div className="album-infostyle">
                        <h1>{Details.title.replaceAll('&quot;', '"')}</h1>
                        {Details.type == 'song' && <><p>{Details.more_info.album.replaceAll('&quot;', '"')} by {Details.more_info.artistMap.primary_artists.map((data) => data.name).join(', ')}</p>
                            <p>Duration  ·  {secondsToTime(+Details.more_info.duration)} sec</p></>}
                        {Details.type == 'album' && <><p> by {Details.more_info.artistMap.primary_artists.map((data) => data.name).join(', ')}  ·  {Details.more_info.song_count} Songs</p>
                            <p>Duration  ·  {secondsToTime(Details.list.map((data) => +data.more_info.duration).reduce((accumulator, currentValue) => accumulator + currentValue, 0))} sec</p></>}
                        {Details.type == 'playlist' && <><p> {Details.subtitle} ·  {Details.list_count} Songs</p></>}

                        <div className="album-actionsstyle">
                            <button className="play-button">Play</button>
                            <button className="action-button"><i className="fa fa-heart fa-lg" aria-hidden="true"></i></button>
                            <button className="action-button"><i className="fa fa-ellipsis-v fa-lg" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                {/* {Details.hasOwnProperty('list') ? <SongList /> : ""} */}
                <SongList />
                <OtherDetails/>
            </div>}

        </div>
    );
};

export default Details;
