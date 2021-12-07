import React from 'react';
import PropTypes from 'prop-types';
import './ColumnsBtn.scss';

export default function ColumnsBtn({setListFlexDirection}) {
  return (
 <div className="columns-btn" onClick={()=>setListFlexDirection(false)}>
   <div></div>
   <div></div>
 </div>
  );
}

ColumnsBtn.propTypes = {
  setListFlexDirection: PropTypes.func.isRequired,
};
