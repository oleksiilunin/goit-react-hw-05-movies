import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
`;

export const HomeTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* box-shadow: rgb(125, 123, 131) -1px -1px 15px; */
  /* rgb(255, 255, 255) 5px 5px 15px; */
`;

export const HomeItem = styled.li`
  padding: 8px;
  border-radius: 8px;

  color: #5b5c6c;

  box-shadow: rgb(125, 123, 131) -1px -1px 5px;
  /* rgb(255, 255, 255) 5px 5px 15px; */

  font-size: 16px;

  &:hover,
  &:focus {
    box-shadow: rgb(125, 123, 131) -1px -1px 15px;
  }
`;
export const HomeMovieTitle = styled.h3`
  color: #5b5c6c;
`;

/* <div>
  <h2>Trending today</h2>
  <ul>
    {trendingMovies.map(({ title, id }) => {
      return (
        title && (
          <li key={id}>
            <Link to={`/movie/${id}`} state={{ from: location }}>
              <h3>{title}</h3>
            </Link>
          </li>
        )
      );
    })}
  </ul>
</div>; */
