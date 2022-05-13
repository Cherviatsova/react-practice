import { Toaster } from 'react-hot-toast';
import { useGetContactsQuery } from './redux/contactsSlice';
import PhonebookForm from './components/PhonebookForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import { Container, MainTitle, Title, Message } from './App.styled';
import Loader from 'components/Loader';

function App() {
  const { data, error, isFetching } = useGetContactsQuery();

  const showContactsSection = contacts => (
    <>
      {contacts.length === 0 ? (
        <Message>Your phonebook is empty, add your first contact!</Message>
      ) : (
        <>
          <Title>Contacts</Title>
          {contacts.length > 1 ? <Filter /> : null}
          <ContactsList contacts={contacts} />
        </>
      )}
    </>
  );

  return (
    <Container>
      <div>
        <Toaster />
      </div>
      <MainTitle>Phonebook</MainTitle>
      <PhonebookForm />
      {isFetching && <Loader config={{ height: '48', width: '48' }} />}
      {data && showContactsSection(data)}
      {error && <div>Something went wrong...</div>}
    </Container>
  );
}

export default App;
