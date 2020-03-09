import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function FormRadio() {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Filter by status</FormLabel>
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
          value='all'
          control={<Radio color='primary' />}
          label='All'
          labelPlacement='top'
        />
      </RadioGroup>
    </FormControl>
  );
}

export default FormRadio;
