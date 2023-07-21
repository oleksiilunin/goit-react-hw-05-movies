import { GlobalStyles } from 'components/GlobalStyles';
import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  LayoutContainer,
  Main,
  NavItem,
  NavList,
  Navigation,
  StyledNavLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Header>
          <Navigation>
            <NavList>
              <NavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/movie">Movies</StyledNavLink>
              </NavItem>
            </NavList>
          </Navigation>
        </Header>
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        {/* <footer>Footer</footer> */}
      </LayoutContainer>
      <GlobalStyles />
      <ToastContainer />
    </>
  );
};

export default Layout;
