import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function FacebookLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(null);

  const handleSuccess = (response) => {
    if (response.status !== 'unknown') {
      console.log('Login Success:', response);
      setUserName(response.name || 'User');
      setIsLoggedIn(true);
    } else {
      console.error('Login Error: Unauthorized');
      setError('Login failed. Please try again.');
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          <FacebookLogin
            appId="1531904814352207"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleSuccess}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      ) : (
        <h2>Welcome, {userName}</h2>
      )}
    </>
  );
}

export default FacebookLoginComponent;
