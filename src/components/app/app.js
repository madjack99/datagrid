import React from 'react';
import { Provider } from 'react-redux';

import Grid from '../grid';
import FormCombined from '../form/combined';
import store from '../../store';

function App() {
  return (
    <Provider store={store}>
      <Grid />
      <FormCombined />
    </Provider>
  );
}

export default App;
