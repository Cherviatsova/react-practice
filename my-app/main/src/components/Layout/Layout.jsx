import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Header, Container, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback="">
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};
