import React from 'react';
import PropTypes from 'prop-types';
import './RowsBtn.scss';

export default function RowsBtn({setListFlexDirection}) {
  return (
 <div className="rows-btn" onClick={()=>setListFlexDirection(true)}>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
 </div>
  );
}


RowsBtn.propTypes = {
  setListFlexDirection: PropTypes.func.isRequired,
};
