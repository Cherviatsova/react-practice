import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Flexbox = styled.ul`
  margin-top: 24px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  list-style-type: none;
`;

export const Text = styled.p`
  margin-top: 24px;
  text-align: center;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #121779;
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2878ad;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  min-width: 98px;
  min-height: 40px;
  cursor: pointer;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(40, 120, 173) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;

  &:hover {
    background-color: #1565c0;
  }
`;
