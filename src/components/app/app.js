import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Grid from '../grid';
import FormCombined from '../form/combined';
import store from '../../store';
import CsvFile from '../csv-file';
import QueryString from '../query-string';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Grid />
        <QueryString />
        <FormCombined />
        <CsvFile />
      </Router>
    </Provider>
  );
}

export default App;
