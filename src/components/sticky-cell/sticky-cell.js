import React from 'react';
import { connect } from 'react-redux';

import './sticky-cell.css';

const StickyCell = ({ rowIndex, columnIndex, style, personList }) => {
  const tableHeaders = Object.keys(personList[rowIndex]);
  const info = tableHeaders[columnIndex];
  return (
    <div className='sticky-cell row t-head' style={style}>
      {info}
    </div>
  );
};

const mapStateToProps = ({ personList }) => ({
  personList,
});

export default connect(mapStateToProps)(StickyCell);
