import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';

import { filterByState } from '../../../actions';

const useStyles = makeStyles(theme => ({
  formControl: {
    border: '1px solid black',
    borderRadius: '5px',
    margin: 15,
    maxWidth: 300,
    minHeight: 100,
    '& > *': {
      margin: theme.spacing(1),
      width: 250,
    },
  },
  formLabel: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.dark,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const states = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

function getStyles(state, stateName, theme) {
  return {
    fontWeight:
      stateName.indexOf(state) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function FormMultipleSelection({ filterByState }) {
  const classes = useStyles();
  const theme = useTheme();
  const [stateName, setStateName] = React.useState([]);

  const handleChange = event => {
    setStateName(event.target.value);
  };

  React.useEffect(() => {
    filterByState(stateName);
  }, [stateName, filterByState]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='multiple-state-label' className={classes.formLabel}>
        Filter by states
      </InputLabel>
      <Select
        labelId='multiple-state-label'
        id='multiple-state'
        multiple
        value={stateName}
        onChange={handleChange}
        input={<Input />}
        MenuProps={MenuProps}
      >
        {states.map(state => (
          <MenuItem
            key={state}
            value={state}
            style={getStyles(state, stateName, theme)}
          >
            {state}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default connect(null, { filterByState })(FormMultipleSelection);
