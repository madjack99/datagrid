import React from 'react';
import { Provider } from 'react-redux';

import Grid from '../grid';
import store from '../../store';

function App() {
  return (
    <Provider store={store}>
      <Grid />
    </Provider>
  );
}

export default App;
