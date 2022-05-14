import { StyledNavLink, Flexbox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Flexbox>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Sign In</StyledNavLink>
    </Flexbox>
  );
};
