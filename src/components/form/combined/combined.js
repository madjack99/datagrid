import React from 'react';

import FormText from '../text';
import FormRadio from '../radio';
import FormMultipleSelection from '../multiple-selection';
import FormCheckbox from '../checkbox';

function FormCombined() {
  return (
    <div>
      <FormText />
      <FormCheckbox />
      <FormRadio />
      <FormMultipleSelection />
    </div>
  );
}

export default FormCombined;
