import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNumber } from 'components/redux/selectors';
import { addContact } from 'components/redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectNumber);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is in your contact list`);
    } else {
      dispatch(addContact({ name, number }));

      form.reset();
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="contactName" className={style.label}>
        Name:
      </label>
      <input
        id="contactName"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={style.inputName}
      />
      <label htmlFor="number" className={style.label}>
        Number:
      </label>
      <span className={style.telHolder}>
        <input
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={style.inputTel}
        />
        <button className={style.submit_bttn} type="submit">
          Add
        </button>
      </span>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
