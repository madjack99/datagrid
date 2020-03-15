import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';

import { switchToSimpleTable } from '../../../actions';

function TableSwitch({ switchToSimpleTable }) {
  const [state, setState] = useState(false);

  const handleSwitch = () => {
    setState(!state);
    switchToSimpleTable(!state);
  };
  return (
    <FormControlLabel
      style={{ margin: 10 }}
      control={
        <Switch
          checked={state}
          onChange={handleSwitch}
          color='primary'
          value='checkedA'
        />
      }
      label='Switch to simple material ui table.'
    />
  );
}

export default connect(null, { switchToSimpleTable })(TableSwitch);
