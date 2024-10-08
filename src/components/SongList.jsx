import React from 'react';
import './SongList.css'; // Import the CSS file
import { useSelector } from 'react-redux';

const SongList = () => {
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

  const { SingleAlbumDetails,Details, loading, error } = useSelector((state) => state.launch);
  // const artistString = Details.list.map(song => {
  //   return song.more_info.artistMap.artists.map(artist => artist.name).join(', ');
  // }); // Join all songs' artist strings into a single string

  // console.log(Details);


  const Data = Details?.list && Array.isArray(Details.list) ? Details : SingleAlbumDetails;

  return (
    <div className="song-list-container">
      {Data?.list && Array.isArray(Data.list) ? (
  Data.list
    .map((song, index) => {
      // Condition to skip a song, e.g., skip the song with id === 2
      if (Details.type=='song' && song.id === Details.id && Data.list.length >'1') {
        return null; // Skip this song by returning null
      }
      
      return (
        <div className="song-row" key={song.id}>
          <div className="song-cover">
            <img src={song.image} alt={song.title} />
            <div className="song-title">{song.title.replaceAll('&quot;', '"')}</div>
          </div>
          <div className="song-info">
            <div className="song-artist">
              {song.more_info.artistMap.primary_artists.map(artist => artist.name).join(', ')}
            </div>
          </div>
          {Data.type === 'album' ? "" : <div className="song-album">{song.more_info.album}</div>}
          <div className="song-favorite"><i className="fa fa-heart fa-lg" aria-hidden="true" /></div>
          <div className="song-duration">{secondsToTime(+song.more_info.duration)}</div>
          <div className="song-favorite"><i className="fa fa-ellipsis-v fa-lg" aria-hidden="true" /></div>
        </div>
      );
    })
    .filter(song => song !== null)  // Filter out the null values to truly skip those songs
) : ""}
    </div>
  );
};

export default SongList;
