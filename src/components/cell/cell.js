import React from 'react';

import getFakeData from '../../services/data';

const data = getFakeData();

function Cell({ columnIndex, rowIndex, style }) {
  let info;
  if (rowIndex === 0) {
    const tableHeaders = Object.keys(data[rowIndex]);
    info = tableHeaders[columnIndex];
  } else {
    const user = Object.values(data[rowIndex]);
    info = user[columnIndex];
  }

  return <div style={style}>{info}</div>;
}

export default Cell;
