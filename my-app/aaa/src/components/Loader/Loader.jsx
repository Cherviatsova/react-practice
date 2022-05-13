import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { LoaderBox } from './Loader.styled';

function Loader({
  config: { height = '24', width = '24', color = 'inherit' },
}) {
  return (
    <LoaderBox>
      <ThreeDots height={height} width={width} color={color} />
    </LoaderBox>
  );
}

Loader.propTypes = {
  config: PropTypes.object,
};

export default Loader;
