import React from 'react';

function About() {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>About Little Lemon</h2>
      <p>
        Located in Chicago, Little Lemon is a family-owned restaurant offering Mediterranean cuisine with a modern twist.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
        <div style={{ width: '200px', height: '200px', backgroundColor: '#ccc' }}>
          {/* Image Placeholder for Adrian */}
        </div>
        <div style={{ width: '200px', height: '200px', backgroundColor: '#ccc' }}>
          {/* Image Placeholder for Mario */}
        </div>
      </div>
    </section>
  );
}

export default About;
