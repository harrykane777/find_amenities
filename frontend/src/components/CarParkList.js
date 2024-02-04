import React, { useState, useEffect } from 'react';
import CarParkListElement from './CarParkListElement';

const CarParkList = () => {
    const [carParks, setCarParks] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/getCarParks")
        .then(res => res.json())
        .then(data => {
            setCarParks(data);
        });
    }, []);

    useEffect(() => {
        console.log('carParks:', carParks);
    }, [carParks]);

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
                overflow: "auto",
            }}
        >
            <h1>Car Parks</h1>
            <ul>
                { carParks 
                    ? Object.keys(carParks).map(key => (
                        <CarParkListElement id={key} carPark={carParks[key]} />
                    ))
                    : (
                        <li>Loading</li>
                    )
                }
            </ul>
        </div>
    );
}

export default CarParkList;