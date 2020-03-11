import React from 'react';
import { connect } from 'react-redux';

import { checkRow } from '../../actions';

import './cell.css';

const calculateClass = rowIndex => {
  return rowIndex % 2 === 0 ? 'even row' : 'odd row';
};

function Cell({
  columnIndex,
  rowIndex,
  style,
  personList,
  checkedRowsList,
  checkRow,
}) {
  // console.log(personList);
  const user = Object.values(personList[rowIndex]);
  const info = user[columnIndex];

  const clazz = calculateClass(rowIndex);
  // console.log(checkedRowsList);
  const handleChecked = e => {
    checkRow(e.target.value);
  };

  const showDeleteButton = () => {
    return checkedRowsList.includes(rowIndex) ? <button>Delete</button> : null;
  };

  const idColumn = (
    <span>
      {rowIndex}
      <input
        type='checkbox'
        className='id-column__input'
        onChange={handleChecked}
        value={rowIndex}
      ></input>
      {showDeleteButton()}
    </span>
  );

  return (
    <div className={clazz} style={style}>
      {columnIndex === 0 ? idColumn : info}
    </div>
  );
}

const mapStateToProps = ({ personList, checkedRowsList }) => ({
  personList,
  checkedRowsList,
});

export default connect(mapStateToProps, { checkRow })(Cell);
