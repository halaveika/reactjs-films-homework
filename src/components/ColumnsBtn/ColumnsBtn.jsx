import React from 'react';
import PropTypes from 'prop-types';
import './ColumnsBtn.scss';

export default function ColumnsBtn({ setListFlexDirection, isRow }) {
  return (
    <div className={`columns-btn${(isRow) ? '' : '_active'}`} onClick={() => setListFlexDirection(false)}>
      <div />
      <div />
    </div>
  );
}

ColumnsBtn.propTypes = {
  setListFlexDirection: PropTypes.func.isRequired,
  isRow: PropTypes.bool.isRequired,
};
