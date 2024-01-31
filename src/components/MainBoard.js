import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from "react-bootstrap/Container"
import AvailableSpaces from "./AvailableSpaces";

const MainBoard = () => {
    return (  
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ 
            backgroundColor: '#CBC3E3', 
            borderRadius: '20px', // Optional: Add border-radius for rounded corners
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a box shadow
            width: '100%',
            marginLeft: '8%',
          }} 
        > 
            <AvailableSpaces></AvailableSpaces>
        </div> 
      ); 
}

export default MainBoard;