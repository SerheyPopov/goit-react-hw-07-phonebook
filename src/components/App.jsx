import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from '../redux/Operations';
import { ContactForm } from './Form/Form';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
