import axios from 'axios';

import { BASE_URL, BEARER_TOKEN } from '../helpers/themoviedbOptions';

export const get = async (endpoint = 'trending/all/day', page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      params: {
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при виконанні запиту:', error);
    // throw error;
  }
};
