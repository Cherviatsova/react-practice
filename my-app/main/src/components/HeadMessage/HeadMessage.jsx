import PropTypes from 'prop-types';
import { Message } from './HeadMessage.styled';

const HeadMessage = ({ text, color = 'inherit' }) => (
  <Message color={color}>{text}</Message>
);

HeadMessage.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default HeadMessage;
