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
import SimpleTable from '../simple-table';

function App({ loadSavedPersonList, isSimpleTableOn }) {
  useEffect(() => {
    const savedPersonList = JSON.parse(localStorage.getItem('savedPersonList'));
    if (savedPersonList) {
      loadSavedPersonList(savedPersonList);
    }
  });
  return (
    <Router>
      {isSimpleTableOn ? null : <Grid />}
      <SortingExplanation />
      <QueryString />
      <InitialListLink />
      <FormCombined />
      <CsvFile />
      {isSimpleTableOn ? <SimpleTable /> : null}
    </Router>
  );
}

const mapStateToProps = ({ isSimpleTableOn }) => ({
  isSimpleTableOn,
});

export default connect(mapStateToProps, { loadSavedPersonList })(App);
