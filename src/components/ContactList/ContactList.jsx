import React from 'react';
import style from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { getNumber, getFilter } from '../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = props => {
  const { onClick } = props;
  const contacts = useSelector(getNumber);
  const filter = useSelector(getFilter).value;

  return (
    <ul className={style.list}>
      {contacts
        .filter(contact => {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(contact => {
          return (
            <li className={style.list_element} key={contact.id}>
              <button
                className={style.delete}
                id={contact.id}
                onClick={onClick}
              >
                Del
              </button>
              <p className={style.contact_details}>
                {contact.name} {contact.number}
              </p>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,

  onClick: PropTypes.func,
};

export default ContactList;
