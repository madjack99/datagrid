import React from 'react';
import { connect } from 'react-redux';

import './cell.css';

const calculateClass = rowIndex => {
  return rowIndex % 2 === 0 ? 'even row' : 'odd row';
};

function Cell({ columnIndex, rowIndex, style, personList }) {
  console.log(personList);
  const user = Object.values(personList[rowIndex]);
  const info = user[columnIndex];

  const clazz = calculateClass(rowIndex);

  return (
    <div className={clazz} style={style}>
      {columnIndex === 0 ? rowIndex : info}
    </div>
  );
}

const mapStateToProps = ({ personList }) => ({
  personList,
});

export default connect(mapStateToProps)(Cell);
