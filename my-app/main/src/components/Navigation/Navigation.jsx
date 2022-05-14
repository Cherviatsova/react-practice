import Logo from 'images/logo.png';
import { StyledNavLink, Flexbox } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const Navigation = () => {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Flexbox>
      <StyledNavLink to="/">
        <img src={Logo} alt="Phonebook" width="60px" />
      </StyledNavLink>
      {IsLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Flexbox>
  );
};
