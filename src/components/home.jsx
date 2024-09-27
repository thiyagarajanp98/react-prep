import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunchData } from '../redux/apiSlice';

const home = () => {
  const dispatch = useDispatch();
  const { launchData, loading, error } = useSelector((state) => state.launch);
// console.log(launchData)

  // const sortedAlbums = Object.entries(launchData['modules']).sort((a, b) => a.position - b.position);
  // console.log(sortedAlbums)
  useEffect(() => {
    dispatch(fetchLaunchData()); // Dispatch the action to fetch data

    // dispatch(fetchAutocompleteData('leo'));
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>Error: {error}</p>} {/* Show error message */}
      {launchData && (
        <div>
          {/* Render the fetched data */}
          <pre>{JSON.stringify(launchData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default home;
