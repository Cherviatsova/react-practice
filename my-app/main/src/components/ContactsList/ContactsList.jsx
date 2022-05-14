import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { ContactList } from './ContactsList.styled';
import { getFilter } from '../../redux/contacts/contacts-selectors';

function ContactsList({ contacts }) {
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactList>
      {filteredContacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
    </ContactList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
