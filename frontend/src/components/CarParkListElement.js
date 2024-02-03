import React from 'react';
import { Row } from 'react-bootstrap';
import './Button.css';

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
            <button className="btn2-grad"
                style={{ width: "13%" }}
                href="/viewCarPark"
            >
                View
            </button>
        </Row>
    );
}

export default CarParkListElement;