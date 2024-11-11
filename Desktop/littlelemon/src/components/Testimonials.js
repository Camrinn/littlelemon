import React from 'react';

function Testimonials() {
  const reviews = [
    { name: 'John Doe', rating: '5/5', review: 'Great food and ambiance!' },
    { name: 'Jane Smith', rating: '4/5', review: 'Loved the service!' },
    { name: 'Alex Johnson', rating: '5/5', review: 'Highly recommend this place!' },
  ];

  return (
    <section style={{ padding: '3rem 2rem', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2>Testimonials</h2>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem' }}>
        {reviews.map((review, index) => (
          <div key={index} style={{ width: '200px', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <p>{review.rating}</p>
            <p>{review.name}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
