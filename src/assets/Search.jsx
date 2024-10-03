import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../assets/Fetch';
import MovieCard from './Moviecard';
import Authimage from '../assets/Authenticationlogo.png';
import {useNavigate , Link} from 'react-router-dom'

const Search = () => {
   
    const navigate = useNavigate()

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const watchlist = useSelector(state => state.watchlist);

  const handleSearch = async () => {
    const result = await searchMovies(query);
    setMovies(result.Search || []); 
  };

  const handleAddToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE', payload: movie });
  };

  const handleRemoveFromWatchlist = (movie) => {
    dispatch({ type: 'REMOVE_MOVIE', payload: movie.imdbID });
  };
  return (
    <div >
       <div className="flex justify-between items-center bg-black p-4 gap-6">
      <div className="flex items-center">
        <img src={Authimage} alt="Auth" className="mr-4" />
        <h1 className="text-white">Authenticate Task</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white rounded px-4 py-2 mr-2">Search</button>
        <button onClick={() => navigate('/watchlist')} className="bg-gray-700 text-white rounded px-4 py-2">Watchlist</button>
        
      </div>
    </div>
    
      <div className="flex flex-wrap justify-center p-4">
        {movies && movies.map(movie => {
          const isInWatchlist = watchlist.some(item => item.imdbID === movie.imdbID);
          
          return (
            <div className="flex flex-col m-2" key={movie.imdbID}>
              <MovieCard 
                title={movie.Title} 
                postersrc={movie.Poster} 
                isInWatchlist={isInWatchlist} 
                onAddToWatchlist={() => handleAddToWatchlist(movie)} 
                onRemoveFromWatchlist={() => handleRemoveFromWatchlist(movie)} 
              />

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
