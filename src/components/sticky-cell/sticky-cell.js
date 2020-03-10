import React, { useState } from 'react';
import { connect } from 'react-redux';

import { sortBy } from '../../actions';

import './sticky-cell.css';

const UP_ARROW = '\u2191';
const DOWN_ARROW = '\u2193';

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

  const handleClick = e => {
    e.persist();
    const category = e.target.innerHTML.split(' ')[0];

    sortBy(category);
    setClickCount(clickCount + 1);
  };

  if (sortDirection) {
    sortDirection = clickCount % 2 ? UP_ARROW : DOWN_ARROW;
  } else if (clickCount !== 0) {
    setClickCount(0);
  }

  return (
    <div
      className='sticky-cell row t-head'
      style={style}
      onClick={e => handleClick(e)}
    >
      {`${info} ${sortDirection}`}
    </div>
  );
};

const mapStateToProps = ({ personList, previouslySortedBy }) => ({
  personList,
  previouslySortedBy,
});

export default connect(mapStateToProps, { sortBy })(StickyCell);
