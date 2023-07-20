import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'services/api';
import {
  ReviewsItem,
  ReviewsList,
  ReviewsTitle,
  ReviewsTitleSpan,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviewsData, setReviewsData] = useState(null);
  // const [page, setPage] = useState(1);

  const ENDPOINT = `/movie/${movieId}/reviews`;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await get(ENDPOINT);
        // setTrendingMovies(data.results);

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
      {results.length === 0 && <dir>There are no reviews for this movie</dir>}
      <>
        <ReviewsList>
          {results.map(({ author, content }) => {
            return (
              <ReviewsItem key={author}>
                <ReviewsTitle>
                  Author: <ReviewsTitleSpan>{author}</ReviewsTitleSpan>
                </ReviewsTitle>
                <p>{content}</p>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      </>
    </>
  );
};

export default Reviews;
