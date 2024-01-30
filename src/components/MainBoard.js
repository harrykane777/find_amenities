import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from "react-bootstrap/Container"
import AvailableSpaces from "./AvailableSpaces";

const MainBoard = () => {
    return (  
        <Container 
          className="d-flex align-items-center justify-content-center"
          style={{ 
            backgroundColor: '#CBC3E3', 
            height: '70vh', // Adjust the height as needed
            width: '70vw', // Adjust the width as needed
            borderRadius: '20px 0 0 20px', // Optional: Add border-radius for rounded corners
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a box shadow
            marginTop: '4.5vh',
            marginRight: '0px'
          }} 
        > 
            <AvailableSpaces></AvailableSpaces>
        </Container> 
      ); 
}

export default MainBoard;