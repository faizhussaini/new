import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Watchlist = () => {
  const watchlist = useSelector(state => state.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    dispatch({ type: 'LOAD_WATCHLIST', payload: savedWatchlist });
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_MOVIE', payload: id });
  };

  return (
    <div>
      <h2>Your Watchlist</h2>
      {watchlist.length > 0 ? (
        watchlist.map((movie) => (
          <div key={movie.imdbID} style={{ marginBottom: '16px' }}>
            <img src={movie.Poster} alt={movie.Title} style={{ width: '100px', height: 'auto', marginRight: '16px' }} />
            <div style={{ display: 'inline-block' }}>
              <h3>{movie.Title} ({movie.Year})</h3>
              <button onClick={() => handleRemove(movie.imdbID)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>No movies in watchlist</p>
      )}
    </div>
  );
};

export default Watchlist;

