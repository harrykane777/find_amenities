import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ViewCarParkPage from './components/ViewCarParkPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/viewCarPark/:id" element={<ViewCarParkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
