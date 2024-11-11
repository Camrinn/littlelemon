import { initializeTimes } from '../Main';
import { fetchAPI } from '../path/to/api';

// Mock fetchAPI to return a predictable array of times
jest.mock('../path/to/api', () => ({
  fetchAPI: jest.fn(() => ['12:00 PM', '12:30 PM', '1:00 PM']),
}));

describe('initializeTimes', () => {
  it('should return available booking times', () => {
    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalled(); // Check if fetchAPI was called
    expect(result).toEqual(['12:00 PM', '12:30 PM', '1:00 PM']); // Check if it returned the expected times
  });
});
