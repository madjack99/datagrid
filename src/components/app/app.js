import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Grid from '../grid';
import FormCombined from '../form/combined';
import CsvFile from '../csv-file';
import QueryString from '../query-string';
import { loadSavedPersonList } from '../../actions';
import InitialListLink from '../initial-list';
import SortingExplanation from '../sorting-explanation';

function App({ loadSavedPersonList }) {
  useEffect(() => {
    const savedPersonList = JSON.parse(localStorage.getItem('savedPersonList'));
    if (savedPersonList) {
      loadSavedPersonList(savedPersonList);
    }
  });
  return (
    <Router>
      <Grid />
      <SortingExplanation />
      <QueryString />
      <InitialListLink />
      <FormCombined />
      <CsvFile />
    </Router>
  );
}

export default connect(null, { loadSavedPersonList })(App);
