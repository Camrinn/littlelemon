import { updateTimes } from '../Main';
import { fetchAPI } from '../path/to/api';

// Mock fetchAPI to return a predictable array of times
jest.mock('../path/to/api', () => ({
  fetchAPI: jest.fn((date) => {
    // You can add logic here to return different data based on the date
    return ['12:00 PM', '12:30 PM', '1:00 PM'];
  }),
}));

describe('updateTimes', () => {
  it('should update available times based on the selected date', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: new Date('2023-05-25') };
    const result = updateTimes(initialState, action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-05-25')); // Verify that fetchAPI was called with the correct date
    expect(result).toEqual(['12:00 PM', '12:30 PM', '1:00 PM']); // Verify the returned times are as expected
  });
});
