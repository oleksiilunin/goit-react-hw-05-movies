import axios from 'axios';

import { BASE_URL, BEARER_TOKEN } from '../helpers/themoviedbOptions';

const axiosInstance = axios.create();

export const get = async (endpoint = 'trending/all/day', page = 1) => {
  const cancelTokenSource = axios.CancelToken.source();

  try {
    const response = await axiosInstance.get(`${BASE_URL}${endpoint}`, {
      cancelToken: cancelTokenSource.token,
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
      params: {
        page: page,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Запит був скасован:', error.message);
    } else {
      console.error('Помилка при виконанні запиту:', error);
      throw error;
    }
  }
};

// // Скасування всіх запитів
// export const cancelAllRequests = () => {
//   axiosInstance.CancelToken.source().cancel('Запросы отменены');
// };
