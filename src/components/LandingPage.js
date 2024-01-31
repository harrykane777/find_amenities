import React from 'react';
import AppNavbar from './AppNavbar';
import MainBoard from './MainBoard';
import Bookmarks from './Bookmarks';

const LandingPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <AppNavbar />
      <div 
        style={{
          display: "flex",
          // border: "10px solid orange",
          margin: "4.5vh 2.5%",
          height: "80%",
        }}
      >
        <Bookmarks />
        <MainBoard />
      </div>
    </div>
  );
}

export default LandingPage;