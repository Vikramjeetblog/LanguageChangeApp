import React from 'react';
import Home from './Components/Home';
import AboutUs from './Components/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

// Import necessary components and modules

const App = () => {
  return (
    <Router>
      {/* Include the Navbar component for navigation */}
      <Navbar />
      <Routes>
        {/* Define routes and their corresponding components */}
        <Route path='/' exact element={<Home />} />
        {/* Route for the Home component */}
        <Route path='/about' element={<AboutUs />} />
        {/* Route for the AboutUs component */}
      </Routes>
    </Router>
  );
}

export default App;
