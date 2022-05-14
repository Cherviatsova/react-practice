import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Flexbox = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  color: white;

  &.active {
    font-weight: 700;
    color: #ffba63;
  }
`;
