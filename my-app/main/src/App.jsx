import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router';
import { authOperations, authSelectors } from 'redux/auth';
import { Layout } from './components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

const makeChunk = componentName => {
  return lazy(() =>
    import(`./pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomePage = makeChunk('HomePage');
const LoginPage = makeChunk('LoginPage');
const RegisterPage = makeChunk('RegisterPage');
const ContactsPage = makeChunk('ContactsPage');

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    )
  );
};
