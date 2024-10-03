const initialState = {
  user: null,
  watchlist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, watchlist: [] };
    case 'ADD_MOVIE':
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case 'REMOVE_MOVIE':
      return { ...state, watchlist: state.watchlist.filter(movie => movie.imdbID !== action.payload) };
    case 'LOAD_WATCHLIST':
      return { ...state, watchlist: action.payload };
    default:
      return state;
  }
};

export default reducer;
