import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filter-slice';
import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { stringAvatar } from 'utils/stringAvatar';
import { ContactItem, ContactText, ContactAvatarBox } from './Contact.styled';

function Contact({ name, number, id }) {
  const [deleteItem, { isLoading }] = useDeleteContactMutation();
  const dispatch = useDispatch();

  const deleteContact = () => {
    deleteItem(id);
    dispatch(changeFilter(''));
    toast.success('Selected contact deleted');
  };

  function verifyName(name) {
    if (name.split(' ').length < 2) {
      return `${name} ${name.split('').slice(1, 2).join()}`;
    }
    return name;
  }

  let verifiedName = verifyName(name);

  return (
    <ContactItem>
      <ContactAvatarBox>
        <Avatar {...stringAvatar(`${verifiedName}`)} />
        <ContactText>
          <b>{name}:</b> {number}
        </ContactText>
      </ContactAvatarBox>

      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        sx={{ bgcolor: '#2878ad' }}
        onClick={deleteContact}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </ContactItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
