import React from 'react';
import Bookmarks from '../components/Bookmarks';
import MainBoard from '../components/MainBoard';
import AppNavbar from '../components/AppNavbar';

const ViewCarParkPage = () => {
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
                <MainBoard />
            </div>
        </div>
    );
}

export default ViewCarParkPage;