import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import { Row, Col } from 'react-bootstrap';
import AvailableSpaces from "./AvailableSpaces";
import AddressBox from "./AddressBox";
import GraphComponent from "./GraphComponent";

const MainBoard = () => {
  return (  
    <div 
      className="d-flex flex-column align-items-start justify-content-start"
      style={{ 
        backgroundColor: '#CBC3E3', 
        borderRadius: '20px', // Optional: Add border-radius for rounded corners
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a box shadow
        width: '100%',
        marginLeft: '8%',
      }} 
    > 
      {/* First Row */}
      <Row
        className="w-100"
        style={{
          borderRadius: '20px', // Top-left and bottom-left corners are rounded
          alignSelf: 'center',
          backgroundColor: '#CBC3E3',
          marginTop: "4.38vh",
          // border: "5px solid red",
          padding: "0 4%",
        }}
      >
        <Col style={{ backgroundColor: '#CBC3E3', borderRadius: '20px' }}>
          <AvailableSpaces />
        </Col>
        <Col style={{ borderRadius: '20px', backgroundColor: '#CBC3E3'}}>
          <AddressBox />
        </Col>
      </Row>

      <Row
        className="w-100"
        style={{
          // marginLeft: '0.39vh',
          alignSelf: 'center',
          backgroundColor: '#CBC3E3',
          borderRadius: '20px', 
          // border: "5px solid green"
        }}
      >
        <Col
          style={{
            backgroundColor: '#CBC3E3',
            borderRadius: '20px', 
            height: '41vh'
          }}
        >
          <GraphComponent />
        </Col>
      </Row>
    </div> 
  ); 
}

export default MainBoard;

