import React from 'react';

function Highlights() {
  const specials = [
    {
      name: 'Greek Salad',
      description: 'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with garlic and rosemary croutons.',
      price: '$12.99',
      image: '/greeksalad.jpg', // Add image path here
    },
    {
      name: 'Bruschetta',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '$5.99',
      image: '/bruchetta.svg', // Add image path here
    },
    {
      name: 'Lemon Dessert',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: '$5.00',
      image: '/lemondessert.jpg', // Add image path here
    },
  ];

  return (
    <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <h2>This week's specials!</h2>
      <button style={{ backgroundColor: 'var(--accent-color)', color: '#fff', margin: '1rem 0', borderRadius: '8px' }}>Online Menu</button>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
        {specials.map((item, index) => (
          <div key={index} style={{ width: '250px', border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', textAlign: 'left', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ width: '100%', height: '150px', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden' }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>{item.name} <span style={{ color: 'var(--secondary-text-color)', float: 'right' }}>{item.price}</span></h3>
            <p>{item.description}</p>
            <button style={{ marginTop: '1rem', backgroundColor: 'transparent', color: 'var(--text-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Order a delivery <span>🚚</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
