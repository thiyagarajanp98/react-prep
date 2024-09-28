import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunchData } from '../redux/apiSlice';

const home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.launch);

  useEffect(() => {
    dispatch(fetchLaunchData()); // Dispatch the action to fetch data
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>Error: {error}</p>} {/* Show error message */}
      {data && (
        <div>
          {/* Render the fetched data */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default home;
