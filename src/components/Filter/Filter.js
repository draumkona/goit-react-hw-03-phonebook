import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ changeHandler }) => {
  return (
    <div className={css.filterBox}>
      <span>Find contacts by name:</span>
      <input type="text" name="filter" onChange={changeHandler}></input>
    </div>
  );
};

Filter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default Filter;
