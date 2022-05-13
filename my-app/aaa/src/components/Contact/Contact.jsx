import React from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import Button from '../Button';
import LetterAvatar from '../LetterAvatar';
import { ContactItem, ContactText, ContactAvatarBox } from './Contact.styled';

function Contact({ name, number, id }) {
  const [deleteItem, { isLoading }] = useDeleteContactMutation();

  const deleteContact = () => {
    deleteItem(id);
    toast.success('Selected contact deleted');
  };

  return (
    <ContactItem>
      <ContactAvatarBox>
        <LetterAvatar name={name} />
        <ContactText>
          <b>{name}:</b> {number}
        </ContactText>
      </ContactAvatarBox>
      <Button
        label={isLoading ? 'Deleting...' : 'Delete'}
        type="submit"
        onClick={deleteContact}
        disabled={isLoading}
      />
    </ContactItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
