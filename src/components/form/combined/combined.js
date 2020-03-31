import React from 'react';

import FormText from '../text';
import FormRadio from '../radio';
import FormMultipleSelection from '../multiple-selection';
import FormCheckbox from '../checkbox';
import TableSwitch from '../table-switch';

function FormCombined() {
  return (
    <div>
      <FormText />
      <FormCheckbox />
      <FormRadio />
      <FormMultipleSelection />
      <TableSwitch />
    </div>
  );
}

export default FormCombined;
