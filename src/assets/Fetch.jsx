import axios from 'axios';

const API_KEY = 'a4a0a8db';
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apikey: API_KEY,
        s: title, 
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return null;  
  }
};
