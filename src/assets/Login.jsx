import React, { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../assets/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = () => {
    dispatch(login(email));
    localStorage.setItem('user', email);

    
    navigate('/search');
  };
useEffect(() => {
   let login = localStorage.getItem('user');
    if(login){
        navigate('/search')
    }

},[])

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
