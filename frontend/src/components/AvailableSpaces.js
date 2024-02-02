import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from "react-bootstrap/Container"

const AvailableSpaces = () => {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ 
          backgroundColor: 'white', 
          height: '25vh', // Adjust the height as needed
          width: '25vw', // Adjust the width as needed
          borderRadius: '20px 20px 20px 20px', // Optional: Add border-radius for rounded corners
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a box shadow
          marginTop: '2vh',
          marginBottom: '2vh'
        }} 
      >

      </Container>
    );
}

export default AvailableSpaces;