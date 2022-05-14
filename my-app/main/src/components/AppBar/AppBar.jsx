import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { Wrapper } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Wrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Wrapper>
  );
};
