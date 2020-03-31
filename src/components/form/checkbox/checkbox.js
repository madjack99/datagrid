import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { hideColumn } from '../../../actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    border: '1px solid black',
    borderRadius: '5px',
    margin: '10px',
    width: 400,
  },
  legend: {
    marginLeft: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function FormCheckbox({ hideColumn }) {
  const classes = useStyles();
  const [hiddenColumns, setHiddenColumns] = useState([]);

  const handleCheck = e => {
    const { value } = e.target;

    if (hiddenColumns.includes(value)) {
      const updatedState = hiddenColumns.filter(item => item !== value);
      setHiddenColumns(updatedState);
    } else {
      setHiddenColumns([...hiddenColumns, value]);
    }
  };

  useEffect(() => {
    hideColumn(hiddenColumns);
  });

  return (
    <FormControl component='fieldset' className={classes.root}>
      <FormLabel component='legend' className={classes.legend}>
        Hide columns
      </FormLabel>
      <FormGroup aria-label='position' onChange={handleCheck} row>
        <FormControlLabel
          value='name'
          control={<Checkbox color='primary' />}
          label='name'
          labelPlacement='top'
        />
        <FormControlLabel
          value='age'
          control={<Checkbox color='primary' />}
          label='age'
          labelPlacement='top'
        />
        <FormControlLabel
          value='married'
          control={<Checkbox color='primary' />}
          label='married'
          labelPlacement='top'
        />
        <FormControlLabel
          value='state'
          control={<Checkbox color='primary' />}
          label='state'
          labelPlacement='top'
        />
        <FormControlLabel
          value='company'
          control={<Checkbox color='primary' />}
          label='company'
          labelPlacement='top'
        />
        <FormControlLabel
          value='job'
          control={<Checkbox color='primary' />}
          label='job'
          labelPlacement='top'
        />
        <FormControlLabel
          value='salary'
          control={<Checkbox color='primary' />}
          label='salary'
          labelPlacement='top'
        />
      </FormGroup>
    </FormControl>
  );
}

export default connect(null, { hideColumn })(FormCheckbox);
