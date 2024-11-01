import React from 'react';
import GoogleLoginComponent from './GoogleLoginComponent';
import FacebookLoginComponent from './FacebookLoginComponent';

function Home() {
  return (
    <>
      <GoogleLoginComponent />
      <FacebookLoginComponent /> 
      <h1>This is Home Page</h1>
    </>
  );
}

export default Home;
