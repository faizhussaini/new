export const login = (email) => ({ type: 'LOGIN', payload: email });
export const logout = () => ({ type: 'LOGOUT' });
export const addMovie = (movie) => ({ type: 'ADD_MOVIE', payload: movie });
export const removeMovie = (id) => ({ type: 'REMOVE_MOVIE', payload: id });
