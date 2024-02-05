import React from 'react';
import AppNavbar from '../components/AppNavbar';
import Bookmarks from '../components/Bookmarks';
import CarParkList from '../components/CarParkList';

const LandingPage = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#F4F2F7", color: "#4C1E6E" }}>
      <AppNavbar />
      <div 
        style={{
          display: "flex",
          margin: "4.5vh 2.5%",
          height: "80%",
        }}
      >
        <Bookmarks />
        <CarParkList />

      </div>
    </div>
  );
}

export default LandingPage;