import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function TableSwitch() {
  const [state, setState] = useState(false);
  return (
    <FormControlLabel
      style={{ margin: 10 }}
      control={
        <Switch
          checked={state}
          onChange={() => setState(!state)}
          color='primary'
          value='checkedA'
        />
      }
      label='Switch to simple material ui table.'
    />
  );
}

export default TableSwitch;
