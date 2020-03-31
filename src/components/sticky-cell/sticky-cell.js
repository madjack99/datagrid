import React, { useState } from 'react';
import { connect } from 'react-redux';

import { sortBy, sortByMultipleFields } from '../../actions';

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
  sortByMultipleFields,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const tableHeaders = Object.keys(personList[rowIndex]);
  const info = tableHeaders[columnIndex];

  let sortDirection = previouslySortedBy === info ? UP_ARROW : '';

  const calculateSortDirection = () => {
    return clickCount % 2 ? 'desc' : 'asc';
  };

  const handleClick = e => {
    e.persist();
    const category = e.target.innerHTML.split(' ')[0];

    if (e.ctrlKey) {
      const direction = calculateSortDirection();
      sortByMultipleFields({ direction, field: category });
    } else {
      sortBy(category);
    }

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

export default connect(mapStateToProps, { sortBy, sortByMultipleFields })(
  StickyCell
);
