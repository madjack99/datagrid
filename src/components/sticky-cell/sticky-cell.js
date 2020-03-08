import React, { useState } from 'react';
import { connect } from 'react-redux';

import { sortBy } from '../../actions';

import './sticky-cell.css';

const handleClick = (e, dispatcher, clickCount, setClickCount) => {
  const category = e.target.innerHTML.split(' ')[0];
  dispatcher(category);
  setClickCount(++clickCount);
};

const StickyCell = ({
  rowIndex,
  columnIndex,
  style,
  personList,
  sortBy,
  previouslySortedBy,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const tableHeaders = Object.keys(personList[rowIndex]);
  const info = tableHeaders[columnIndex];

  let sortDirection = previouslySortedBy === info ? '\u2191' : '';
  if (sortDirection) {
    sortDirection = clickCount % 2 ? '\u2191' : '\u2193';
  }

  return (
    <div
      className='sticky-cell row t-head'
      style={style}
      onClick={e => handleClick(e, sortBy, clickCount, setClickCount)}
    >
      {`${info} ${sortDirection}`}
    </div>
  );
};

const mapStateToProps = ({ personList, previouslySortedBy }) => ({
  personList,
  previouslySortedBy,
});

const mapDispatchToProps = dispatch => {
  return {
    sortBy: category => dispatch(sortBy(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StickyCell);
