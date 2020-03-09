import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function FormText() {
  const classes = useStyles();
  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputText);
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

export default FormText;
