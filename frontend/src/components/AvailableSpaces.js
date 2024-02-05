import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import { Container, Row, Col } from "react-bootstrap";

const AvailableSpaces = ({ data }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ 
        backgroundColor: 'white', 
        width: '45%',
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        fontSize: '1.25em',
      }} 
    >
      {data ? (
        <Container>
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'end' }}>
              <b>Available Spaces:</b>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'start' }}>
              {data["spots"] - data["occupancy"]["total"]} parking spaces available
            </Col>
          </Row>

          <Row>
            <Col style={{ display: 'flex', justifyContent: 'end' }}>
              <b>Maximum Capacity:</b>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'start' }}>
              {data["spots"]} parking spaces total
            </Col>
          </Row>

          <Row>
            <Col style={{ display: 'flex', justifyContent: 'end' }}>
              <b>Parking Spaces Occupied:</b>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'start' }}>
              {data["occupancy"]["total"]} parking spaces taken
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AvailableSpaces;