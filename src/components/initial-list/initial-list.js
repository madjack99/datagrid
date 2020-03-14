import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { getInitialList } from '../../actions';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10,
  },
}));

function InitialListLink({ getInitialList }) {
  const classes = useStyles();

  const handleClick = e => {
    getInitialList();
  };

  return (
    <Link to='/'>
      <Typography
        color='secondary'
        display='inline'
        className={classes.root}
        onClick={handleClick}
      >
        Get initial list of persons
      </Typography>
    </Link>
  );
}

export default connect(null, { getInitialList })(InitialListLink);
