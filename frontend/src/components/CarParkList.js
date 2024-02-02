import React from 'react';
import CarParkListElement from './CarParkListElement';

const CarParkList = () => {
    return (
        <div 
            className="d-flex flex-column"
            style={{ 
                backgroundColor: '#CBC3E3', 
                borderRadius: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                width: '100%',
                marginLeft: '8%',
                padding: "2%",
            }}
        >
            <h1>Car Parks</h1>
            <CarParkListElement />
            <CarParkListElement />
            <CarParkListElement />
        </div>
    );
}

export default CarParkList;