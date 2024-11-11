import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './components/BookingForm';

// Mock function to fetch available times (replace with actual fetchAPI if needed)
function fetchAPI(date) {
  return ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM'];
}

// Mock function for submitAPI (replace with actual submitAPI if available)
function submitAPI(formData) {
  console.log("Form data submitted:", formData);
  return true; // Simulates a successful submission
}

// Initialize available times
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

// Reducer to update available times based on selected date
function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmation');
    } else {
      alert("Failed to submit your reservation. Please try again.");
    }
  };

  return (
    <div>
      <h1>Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default Main;
