import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { filterByTextAndState } from '../../actions';

function QueryString({ filterByTextAndState }) {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const textQuery = searchParams.get('text');
    const stateQuery = searchParams.get('state');
    if (textQuery && stateQuery) {
      filterByTextAndState(textQuery, stateQuery);
    }
  }, [location, filterByTextAndState]);
  return (
    <Link to={{ search: '?text=mrs&state=NH' }}>
      Click here to use query string for filtering
    </Link>
  );
}

export default connect(null, { filterByTextAndState })(QueryString);
