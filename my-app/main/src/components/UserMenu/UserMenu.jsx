import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Flexbox, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <Flexbox>
      <AccountCircleIcon style={{ fontSize: '40px' }} />
      <p>{userEmail}</p>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        <LogoutRoundedIcon style={{ fontSize: '24px', color: 'inherit' }} />{' '}
        Logout
      </Button>
    </Flexbox>
  );
};
