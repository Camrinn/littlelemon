import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input changes for form fields and check validity
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: new Date(value) });
    }

    // Check if form is valid after each field change
    validateForm(updatedFormData);
  };

  // Function to validate form data
  const validateForm = (data) => {
    const { date, time, guests } = data;
    const isValid =
      date && time && guests >= 1 && guests <= 20 && data.occasion;
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}
    >
      <h2>Book a Table</h2>

      {/* Date Field */}
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '100%',
          }}
        />
      </label>

      {/* Time Field */}
      <label>
        Time:
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '100%',
          }}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>

      {/* Number of Guests Field with HTML5 validation */}
      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="20"
          required
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '100%',
          }}
        />
      </label>

      {/* Occasion Field */}
      <label>
        Occasion:
        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '100%',
          }}
        >
          <option value="">Select an Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>

      {/* Submit Button, disabled if the form is invalid */}
      <button
        type="submit"
        disabled={!isFormValid}
        style={{
          padding: '0.8rem',
          backgroundColor: isFormValid ? '#495e57' : '#aaa',
          color: '#fff',
          border: 'none',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          fontWeight: 'bold',
          borderRadius: '8px',
        }}
      >
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;
