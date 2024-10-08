import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunchData } from '../redux/apiSlice';
import AlbumContainer from './AlbumContainer';
import Loading from './Loading';

const home = () => {
  const dispatch = useDispatch();
  const { launchData, loading, error } = useSelector((state) => state.launch);
  // console.log(launchData)

  // const sortedAlbums = Object.entries(launchData['modules']).sort((a, b) => a.position - b.position);
  // console.log(sortedAlbums)
  useEffect(() => {
   !launchData ? dispatch(fetchLaunchData()):""; // Dispatch the action to fetch data

    // dispatch(fetchAutocompleteData('leo'));
  }, [dispatch]);

  // console.log(launchData)

  return (
    <>
        {loading && <Loading />} {/* Show loading message */}
        {error && <p>Error: {error}</p>} {/* Show error message */}
        {launchData && Object.keys(launchData).length > 0 ? (
          <>
            {Object.keys(launchData).map((key, index) => (
              <AlbumContainer key={index} titles={key} launchData={launchData[key]} />
            ))}
          </>
        ) : null}
    </>
  );
};

export default home;
