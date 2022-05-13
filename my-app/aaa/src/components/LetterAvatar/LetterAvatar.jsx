import * as React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from './LetterAvatar.styled';

export default function LetterAvatar({ name }) {
  const letters = name
    .split(' ')
    .map(el => el[0])
    .join('')
    .slice(0, 2);
  return <Avatar>{letters}</Avatar>;
}

LetterAvatar.propTypes = {
  name: PropTypes.string.isRequired,
};
