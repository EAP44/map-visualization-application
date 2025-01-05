import axios from 'axios';

const API_URL = 'http://localhost:5000/api/classrooms';

export const getClassrooms = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching classrooms', error);
  }
};

export const getShortestPath = async (start, end) => {
  try {
    const response = await axios.post(`${API_URL}/shortest-path`, { start, end });
    return response.data;
  } catch (error) {
    console.error('Error fetching shortest path', error);
  }
};
