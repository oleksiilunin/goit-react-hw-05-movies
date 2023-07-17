import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviewsData, setReviewsData] = useState(null);
  const [page, setPage] = useState(1);

  const ENDPOINT = `/movie/${movieId}/reviews`;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await get(ENDPOINT, page);
        // setTrendingMovies(data.results);
        console.log('reviewsData', reviewsData);

        setReviewsData(reviewsData);
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    };

    fetchReviews();

    // return () => {
    //   cancelAllRequests(); // Скасовує всі запити при розмонтуванні компонента
    // };
  }, [ENDPOINT]);

  if (!reviewsData) {
    return <div>Loading...</div>;
  }

  const { results } = reviewsData;

  return (
    <>
      <h3>Reviews:</h3>
      {results.length === 0 && <dir>There are no reviews for this movie</dir>}
      <>
        <ul>
          {results.map(({ author, content }) => {
            return (
              <li key={author}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      </>
    </>
  );
};

export default Reviews;
