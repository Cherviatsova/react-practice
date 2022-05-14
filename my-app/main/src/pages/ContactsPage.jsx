import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
import PhonebookForm from 'components/PhonebookForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import HeadMessage from 'components/HeadMessage';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ContactsPage = () => {
  const { data, error, isFetching } = useGetContactsQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showContactsSection = contacts => (
    <>
      {contacts.length === 0 ? (
        <>
          <HeadMessage
            text={'Your phonebook is empty. Add your first contact!'}
            color={'red'}
          />
          <PhonebookForm />
        </>
      ) : (
        <>
          <Button onClick={handleOpen}>+ Add contact</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="contact updating"
            aria-describedby="contact updating"
          >
            <Box sx={modalStyle}>
              <PhonebookForm closeModal={handleClose} isOpenModal={open} />
            </Box>
          </Modal>
          {contacts.length > 1 ? <Filter /> : null}
          <ContactsList contacts={contacts} />
        </>
      )}
    </>
  );

  return (
    <div>
      <div>
        <Toaster />
      </div>
      {isFetching && <Loader config={{ height: '48', width: '48' }} />}
      {data && showContactsSection(data)}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};
