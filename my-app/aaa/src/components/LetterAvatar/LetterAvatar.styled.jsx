import styled from 'styled-components';
import { getRandomColor } from 'utils';

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getRandomColor};
  color: white;
`;
