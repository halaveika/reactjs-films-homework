import React from 'react';
import './RowsBtn.scss';

export default function RowsBtn({handlRow}) {
  return (
 <div className="rows-btn" onClick={handlRow}>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
 </div>
  );
}


