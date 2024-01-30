import React from 'react';
import AppNavbar from './AppNavbar';
import AvailableSpaces from './AvailableSpaces';
import MainBoard from './MainBoard';

const LandingPage = () => {
  return (
    <div>
      <AppNavbar />
      <MainBoard />
      <AvailableSpaces />
      Landing Page
    </div>
  );
}

export default LandingPage;