import React from 'react';
import './SongList.css'; // Import the CSS file

const SongList = () => {
  // Sample data for the songs
  const songs = [
    {
      id: 1,
      title: 'Adangaatha Asuran',
      artist: 'A.R. Rahman, Dhanush',
      album: 'Raayan',
      duration: '4:09',
      img: 'https://c.saavncdn.com/275/Raayan-Tamil-2024-20240706124553-500x500.jpg',
    },
    {
      id: 2,
      title: 'Water Packet',
      artist: 'Santhosh Narayanan, Shweta Mohan, Gana',
      album: 'Raayan',
      duration: '4:06',
      img: 'https://c.saavncdn.com/275/Raayan-Tamil-2024-20240706124553-500x500.jpg',
    },
    {
      id: 3,
      title: 'Nee Singam Dhan',
      artist: 'A.R. Rahman, Sid Sriram',
      album: 'Pathu Thala (Original Motion Picture Soundtrack)',
      duration: '4:07',
      img: 'https://c.saavncdn.com/301/Pathu-Thala-Tamil-2023-20230317121403-500x500.jpg',
    },
    {
      id: 4,
      title: 'Ale Ale',
      artist: 'A.R. Rahman, Karthik, Chitra Sivaraman',
      album: 'Boys',
      duration: '6:27',
      img: 'https://c.saavncdn.com/737/Boys-Tamil-2003-20190730173510-500x500.jpg',
    },
    {
      id: 5,
      title: 'New York Nagaram',
      artist: 'A.R. Rahman',
      album: 'Sillunu Oru Kadhal',
      duration: '6:19',
      img: 'https://c.saavncdn.com/802/Sillunu-Oru-Kadhal-Tamil-2006-20191214162953-500x500.jpg',
    },
  ];

  return (
    <div className="song-list-container">
      {songs.map((song, index) => (
        <div className="song-row" key={song.id}>
          <div className="song-cover">
            <img src={song.img} alt={song.title} />
            <div className="song-title">{song.title}</div>
          </div>
          <div className="song-info">
            <div className="song-artist">{song.artist}</div>
          </div>
          <div className="song-album">{song.album}</div>
          <div className="song-favorite"><i class="fa fa-heart fa-lg" aria-hidden="true"/></div>
          <div className="song-duration">{song.duration}</div>
          <div className="song-favorite"><i class="fa fa-ellipsis-v fa-lg" aria-hidden="true"/></div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
