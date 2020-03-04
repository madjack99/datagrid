import React from 'react';
import getFakeData from '../../services/data';
import Grid from '../grid';

function App() {
  console.log(getFakeData());
  return <Grid />;
}

export default App;
