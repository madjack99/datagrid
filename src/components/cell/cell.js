import React from 'react';

import getFakeData from '../../services/data';

import './cell.css';

const data = getFakeData();

const calculateClass = rowIndex => {
  return rowIndex % 2 === 0 ? 'even row' : 'odd row';
};

function Cell({ columnIndex, rowIndex, style }) {
  const user = Object.values(data[rowIndex]);
  const info = user[columnIndex];

  const clazz = calculateClass(rowIndex);

  return (
    <div className={clazz} style={style}>
      {info}
    </div>
  );
}

const StickyCell = ({ rowIndex, columnIndex, style }) => {
  const tableHeaders = Object.keys(data[rowIndex]);
  const info = tableHeaders[columnIndex];
  return (
    <div className='sticky-cell row t-head' style={style}>
      {info}
    </div>
  );
};

export { StickyCell };
export default Cell;
