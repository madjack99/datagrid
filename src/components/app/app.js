import React from 'react';
import { Provider } from 'react-redux';

import Grid from '../grid';
import FormCombined from '../form/combined';
import store from '../../store';
import CsvFile from '../csv-file';

function App() {
  return (
    <Provider store={store}>
      <Grid />
      <FormCombined />
      <CsvFile />
    </Provider>
  );
}

export default App;
