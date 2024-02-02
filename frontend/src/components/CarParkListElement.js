import React from 'react';
import { Row, Button } from 'react-bootstrap';

const CarParkListElement = () => {
    return (
        <Row style={{ 
            width: "100%", 
            margin: "1% 0", 
            minHeight: "10%",
            alignItems: "center",
            padding: "1% 2%", 
            backgroundColor: "#9C89B8",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{ fontSize: "2em", padding: "0" }}>
                List Element
            </div>
            <Button 
                style={{ width: "5%", backgroundColor: "#4C1E6E", borderColor: "#CBC3E3" }}
                href="/viewCarPark"
            >
                View
            </Button>
        </Row>
    );
}

export default CarParkListElement;