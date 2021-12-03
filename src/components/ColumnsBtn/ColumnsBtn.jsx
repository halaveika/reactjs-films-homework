import React from 'react';
import './ColumnsBtn.scss';

export default function ColumnsBtn({handleColumn}) {
  return (
 <div className="columns-btn" onClick={handleColumn}>
   <div></div>
   <div></div>
 </div>
  );
}


