import React from 'react';
import AppNavbar from '../components/AppNavbar';
import Bookmarks from '../components/Bookmarks';
import CarParkList from '../components/CarParkList';
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

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
        <h1>{message}</h1>

      </div>
    </div>
  );
}

export default LandingPage;