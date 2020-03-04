import React from 'react';

import getFakeData from '../../services/data';

import './cell.css';

const data = getFakeData();

const calculateClass = rowIndex => {
  if (rowIndex === 0) {
    return 't-head row';
  }

  return rowIndex % 2 === 0 ? 'even row' : 'odd row';
};

function Cell({ columnIndex, rowIndex, style }) {
  let info;
  if (rowIndex === 0) {
    const tableHeaders = Object.keys(data[rowIndex]);
    info = tableHeaders[columnIndex];
  } else {
    const user = Object.values(data[rowIndex]);
    info = user[columnIndex];
  }

  const clazz = calculateClass(rowIndex);

  return (
    <div className={clazz} style={style}>
      {info}
    </div>
  );
}

export default Cell;
