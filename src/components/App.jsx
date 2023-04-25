import React, { useEffect, useRef } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getNumber } from './redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteNumber } from './redux/numberSlice';
import { setFilter } from '../components/redux/filterSlice';

const App = () => {
  const contacts = useSelector(getNumber);
  const storageRef = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storageRef.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      storageRef.current = true;
    }
  }, [contacts]);

  const delateNum = e => {
    e.preventDefault();
    dispatch(deleteNumber(e.target.id));
  };

  const setFilters = e => {
    const newfilter = e.target.value;
    dispatch(setFilter(newfilter));
  };

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
      <ContactList onClick={delateNum} />
    </div>
  );
};

export default App;
