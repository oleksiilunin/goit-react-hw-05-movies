import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   return () => {};
  // }, []);
  return <div>Cast Gallery: {movieId}</div>;
};

export default Cast;
