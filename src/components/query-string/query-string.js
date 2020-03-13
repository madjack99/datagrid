import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { filterByTextAndState } from '../../actions';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10,
  },
}));

function QueryString({ filterByTextAndState }) {
  const classes = useStyles();
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
      <Typography color='primary' display='inline' className={classes.root}>
        Click here to use query string for filtering
      </Typography>
    </Link>
  );
}

export default connect(null, { filterByTextAndState })(QueryString);
