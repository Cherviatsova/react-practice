import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return IsLoggedIn ? children : <Navigate to={redirectTo} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};
