import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   return () => {};
  // }, []);

  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
