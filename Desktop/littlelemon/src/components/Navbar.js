import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
      <div>
        <img src="/Logo.svg" alt="Little Lemon Logo" style={{ height: '50px' }} />
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="/booking">Reservations</a>
        <a href="#order">Order Online</a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
