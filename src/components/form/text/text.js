import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { filterByText } from '../../../actions';

const useStyles = makeStyles(theme => ({
  root: {
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
        label='Outlined'
        variant='outlined'
        value={inputText}
        onChange={handleChange}
      />
      <Button variant='contained' color='primary' type='submit'>
        Filter by text
      </Button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  filterByText: textInput => dispatch(filterByText(textInput)),
});

export default connect(null, mapDispatchToProps)(FormText);
