import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10,
  },
}));

function InitialListLink() {
  const classes = useStyles();

  return (
    <Link>
      <Typography color='secondary' display='inline' className={classes.root}>
        Get initial list of persons
      </Typography>
    </Link>
  );
}

export default InitialListLink;
