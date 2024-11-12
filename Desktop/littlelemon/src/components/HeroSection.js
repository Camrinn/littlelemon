import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section style={{ backgroundColor: 'var(--primary-color)', color: '#fff', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 className='text-white'>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button onClick={() => navigate('/booking')}>Reserve a Table</button>
      </div>
      <div style={{ width: '300px', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
        <img src="/restaurant.jpg" alt="Little Lemon Restaurant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </section>
  );
}

export default HeroSection;
