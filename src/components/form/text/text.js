import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { filterByText } from '../../../actions';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid black',
    borderRadius: '5px',
    margin: '10px',
    width: 260,
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function FormText({ filterByText }) {
  const classes = useStyles();
  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    filterByText(inputText.toLowerCase());
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <TextField
        id='outlined-basic'
        label='Search for...'
        variant='outlined'
        value={inputText}
        onChange={handleChange}
      />
      <br />
      <Button variant='contained' color='primary' type='submit'>
        Filter by text
      </Button>
    </form>
  );
}

export default connect(null, { filterByText })(FormText);
