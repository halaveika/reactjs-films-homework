import React from 'react';
import PropTypes from 'prop-types';
import './RowsBtn.scss';

export default function RowsBtn({ setListFlexDirection, isRow }) {
  return (
    <div className={`rows-btn${(isRow) ? '_active' : ''}`} onClick={() => setListFlexDirection(true)}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

RowsBtn.propTypes = {
  setListFlexDirection: PropTypes.func.isRequired,
  isRow: PropTypes.bool.isRequired,
};
