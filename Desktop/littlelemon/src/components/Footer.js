import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '3rem', backgroundColor: 'var(--primary-color)', color: '#fff', textAlign: 'center' }}>
      <p>Little Lemon</p>
      <p>Address: 123 Lemon St, Chicago, IL</p>
      <p>Phone: (123) 456-7890</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <a href="#facebook">Facebook</a> | <a href="#instagram">Instagram</a> | <a href="#twitter">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
