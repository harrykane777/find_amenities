import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import './Button.css';

const CarParkListElement = ({ id, carPark }) => {
    const navigate = useNavigate();

    return (
        <Row style={{ 
            width: "100%",
            margin: "2% -2%",
            alignItems: "center",
            padding: "1% 2%", 
            backgroundColor: "#9C89B8",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{ fontSize: "1.75em", padding: "0", marginBottom: "1%" }}>
                {carPark}
            </div>
            <button className="btn2-grad" style={{ width: "13%" }} onClick={() => navigate(`/viewCarPark/${id}`)}>
                View {id}
            </button>
        </Row>
    );
}

export default CarParkListElement;