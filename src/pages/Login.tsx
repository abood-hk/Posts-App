import { useState, useEffect } from 'react';

const Login = () => {
  const token = localStorage.getItem('token');
  const [logedIn, setLogedIn] = useState(token ? token : 'hide');
  useEffect(() => {
    localStorage.setItem('token', logedIn);
  }, [logedIn]);
  return (
    <>
      <h2>Please Login to access all features</h2>
      <button
        onClick={() => {
          if (logedIn === 'hide') {
            return setLogedIn('show');
          }
          setLogedIn('hide');
        }}
        style={{ width: '7rem', fontSize: '1rem' }}
      >
        {logedIn === 'hide' ? 'Login' : 'Logout'}
      </button>
    </>
  );
};

export default Login;
