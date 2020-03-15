import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { checkRow, deleteRow } from '../../actions';

import './cell.css';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 5,
    padding: 0,
  },
}));

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
  deleteRow,
}) {
  const classes = useStyles();

  const user = Object.values(personList[rowIndex]);
  const info = user[columnIndex];

  const clazz = calculateClass(rowIndex);
  const handleChecked = e => {
    checkRow(e.target.value);
  };

  const handleDeleteRow = () => {
    deleteRow();
  };

  const showDeleteButton = () => {
    return checkedRowsList.includes(rowIndex) ? (
      <Button
        className={classes.root}
        variant='contained'
        color='secondary'
        onClick={handleDeleteRow}
      >
        Delete
      </Button>
    ) : null;
  };

  const idColumn = (
    <span>
      {rowIndex}
      <input
        type='checkbox'
        className='id-column__input'
        checked={checkedRowsList.includes(rowIndex)}
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

export default connect(mapStateToProps, { checkRow, deleteRow })(Cell);
