import React from 'react';

import getFakeData from '../../services/data';

const data = getFakeData();

function Cell({ columnIndex, rowIndex, style }) {
  const user = Object.values(data[rowIndex]);
  const info = user[columnIndex];
  return <div style={style}>{info}</div>;
}

export default Cell;
