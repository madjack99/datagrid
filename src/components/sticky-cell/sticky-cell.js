import React from 'react';
import { connect } from 'react-redux';

import { sortBy } from '../../actions';

import './sticky-cell.css';

const StickyCell = ({ rowIndex, columnIndex, style, personList, sortBy }) => {
  const tableHeaders = Object.keys(personList[rowIndex]);
  const info = tableHeaders[columnIndex];
  return (
    <div
      className='sticky-cell row t-head'
      style={style}
      onClick={e => sortBy(e.target.innerHTML)}
    >
      {info}
    </div>
  );
};

const mapStateToProps = ({ personList }) => ({
  personList,
});

const mapDispatchToProps = dispatch => {
  return {
    sortBy: category => dispatch(sortBy(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StickyCell);
