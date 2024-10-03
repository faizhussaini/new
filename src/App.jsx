import React from 'react';
import {  Routes, Route,Navigate} from 'react-router-dom';
import Login from './assets/Login';
import Search from './assets/Search';
import Watchlist from './assets/WatchList';
import { Provider } from 'react-redux';
import store from './assets/store';
const App = () => (
  <Provider store={store}>
    <Routes>
      
        <Route path="/login" element={<Login/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/*" element={<Navigate to="/login" />} />
      
    </Routes>
  </Provider>
);

export default App;
