import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import AvailableSpaces from "./AvailableSpaces";
import AddressBox from "./AddressBox";
import GraphComponent from "./GraphComponent";

const MainBoard = () => {
  const { id } = useParams();
  const [carParkData, setCarParkData] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:8000/carPark/${id}`)
    .then(res => res.json())
    .then(data => setCarParkData(data));
  }, [id]);

  useEffect(() => {
    console.log(carParkData);
  }, [carParkData]);


  return (  
    <div 
      className="d-flex flex-column align-items-start justify-content-start"
      style={{ 
        backgroundColor: '#CBC3E3', 
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        marginLeft: '8%',
        padding: '2%',
      }} 
    >
      <h1>{carParkData ? carParkData['facility_name'] : 'Loading...'}</h1>
      <div className="w-100" style={{ minHeight: '30%', display: 'flex', margin: '1% 0', justifyContent: 'space-between' }}>
          <AvailableSpaces data={carParkData} />
          <AddressBox />
      </div>

      <div className="w-100" style={{ margin: '1% 0' }}>
          <GraphComponent />
      </div>
    </div>
  ); 
}

export default MainBoard;

