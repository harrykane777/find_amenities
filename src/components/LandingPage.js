import React from 'react';
import AppNavbar from './AppNavbar';
import Bookmarks from './Bookmarks';
import CarParkList from './CarParkList';

const LandingPage = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#F4F2F7", color: "#4C1E6E" }}>
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
        {/* <MainBoard /> */}
        <CarParkList />
      </div>
    </div>
  );
}

export default LandingPage;