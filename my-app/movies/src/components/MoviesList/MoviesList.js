import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListMovie } from './MovieList.styled';

export default function MovieList({ list }) {
  const location = useLocation();

  return (
    <ListMovie >
      {list  &&
        list.map(({id, title, name}) => (
          <li  key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
            {name ? name : title}
            {title}
            </Link>
          </li>
        ))}
    </ListMovie>
  );
}

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

