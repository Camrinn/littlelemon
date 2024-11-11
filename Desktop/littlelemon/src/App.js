import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Main from './Main'; // The booking page with the form and available times
import ConfirmedBooking from './components/ConfirmedBooking'; // The booking confirmation page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={
            <>
              <HeroSection />
              <Highlights />
              <Testimonials />
              <About />
            </>
          } />

          {/* Booking Page Route */}
          <Route path="/booking" element={<Main />} />

          {/* Confirmation Page Route */}
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
