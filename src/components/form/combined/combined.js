import React from 'react';

import FormText from '../text';
import FormRadio from '../radio';
import FormMultipleSelection from '../multiple-selection';

function FormCombined() {
  return (
    <div>
      Form
      <FormText />
      <FormRadio />
      <FormMultipleSelection />
    </div>
  );
}

export default FormCombined;
