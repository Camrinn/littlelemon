import React from 'react';

function HeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--primary-color)', color: '#fff', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ maxWidth: '600px' }}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div style={{ width: '300px', height: '300px', backgroundColor: '#ccc', borderRadius: '8px' }}>
        {/* Image placeholder */}
      </div>
    </section>
  );
}

export default HeroSection;
