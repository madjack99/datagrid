import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { getInitialList } from '../../actions';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 10,
  },
  link: {
    textDecoration: 'none',
  },
}));

function InitialListLink({ getInitialList }) {
  const classes = useStyles();

  const handleClick = e => {
    getInitialList();
  };

  return (
    <Link to='/' className={classes.link}>
      <Button
        color='secondary'
        variant='contained'
        className={classes.root}
        onClick={handleClick}
      >
        Get initial list of persons
      </Button>
    </Link>
  );
}

export default connect(null, { getInitialList })(InitialListLink);
