import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from "react-bootstrap/Container"
import { Bar } from 'react-chartjs-2';

const GraphComponent = () => {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ 
          backgroundColor: 'white', 
          height: '38vh', // Adjust the height as needed
          width: '59vw', // Adjust the width as needed
          borderRadius: '20px 20px 20px 20px', // Optional: Add border-radius for rounded corners
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          marginTop: '1.4vh',
          // marginBottom: '2vh'

        }} 
      >
      </Container>
    );
}

export default GraphComponent;