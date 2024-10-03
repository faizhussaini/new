import React from 'react';
import '../assets/MovieCard.css';

const MovieCard = ({ title, postersrc, isInWatchlist, onAddToWatchlist, onRemoveFromWatchlist }) => {
  return (
    <div className="movie-card">
      <img src={postersrc} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <div className="button-container">
          {isInWatchlist ? (
            <button onClick={onRemoveFromWatchlist}>Remove from Watchlist</button>
          ) : (
            <button onClick={onAddToWatchlist}>Add to Watchlist</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
