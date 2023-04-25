import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getError, getIsLoading, getNumber } from './redux/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from '../components/redux/filterSlice';
import { deleteNumber, fetchContacts } from './redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contact = useSelector(getNumber);

  const delateNum = e => {
    e.preventDefault();
    dispatch(deleteNumber(e.target.id));
  };

  const setFilters = e => {
    const newfilter = e.target.value;
    dispatch(setFilter(newfilter));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const test = [
    { name: 'dsadas', number: '1231231', isFav: false, id: '6' },
    { name: 'dasdas', number: '123123', isFav: false, id: '7' },
    { name: 'dasdasd', number: '12312313', isFav: false, id: '8' },
  ];

  return (
    <div
      style={{
        backgroundColor: '#1C1C1C',
        padding: '10px 10px',
        margin: '10px auto',
        width: '412px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: 'white' }}>Phonebook</h1>
      <ContactForm />

      <h2 style={{ color: 'white', margin: '10px' }}>Contacts</h2>
      <Filter onChange={setFilters} />
      {isLoading && !error && <h4>Loading in progress, please wait...</h4>}
      <ContactList onClick={delateNum} />
    </div>
  );
};

export default App;
