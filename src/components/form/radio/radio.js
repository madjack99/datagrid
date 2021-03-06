import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { filterByStatus } from '../../../actions';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid black',
    borderRadius: '5px',
    margin: '10px',
    '& > *': {
      margin: theme.spacing(1),
      width: 250,
    },
  },
  legend: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.dark,
    paddingLeft: theme.spacing(2),
  },
}));

function FormRadio({ filterByStatus }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
    filterByStatus(event.target.value);
  };

  return (
    <FormControl component='fieldset' className={classes.root}>
      <FormLabel component='legend' className={classes.legend}>
        Filter by status
      </FormLabel>
      <RadioGroup
        aria-label='position'
        name='position'
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value='married'
          control={<Radio color='primary' />}
          label='Married'
          labelPlacement='top'
        />
        <FormControlLabel
          value='single'
          control={<Radio color='primary' />}
          label='Single'
          labelPlacement='top'
        />
        <FormControlLabel
          value='both'
          control={<Radio color='primary' />}
          label='Both'
          labelPlacement='top'
        />
      </RadioGroup>
    </FormControl>
  );
}

export default connect(null, { filterByStatus })(FormRadio);
