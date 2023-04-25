import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Filter/Filter.module.css';

const Filter = props => {
  const { onChange } = props;

  return (
    <div>
      <p className={style.findPara}>Find contact by name</p>
      <input
        type="text"
        onChange={onChange}
        placeholder="Search"
        className={style.findInput}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
