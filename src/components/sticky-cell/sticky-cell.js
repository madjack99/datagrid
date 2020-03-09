import React, { useState } from 'react';
import { connect } from 'react-redux';

import { sortBy } from '../../actions';

import './sticky-cell.css';

const UP_ARROW = '\u2191';
const DOWN_ARROW = '\u2193';

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

  let sortDirection = previouslySortedBy === info ? UP_ARROW : '';
  if (sortDirection) {
    sortDirection = clickCount % 2 ? UP_ARROW : DOWN_ARROW;
  } else if (clickCount !== 0) {
    setClickCount(0);
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
