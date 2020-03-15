import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 10,
  },
}));

function SortingExplanation() {
  const classes = useStyles();
  return (
    <Typography
      className={classes.root}
      align='left'
      color='primary'
      variant='h5'
    >
      Press 'Ctrl' and click on different columns to use multiple columns
      filtering.
    </Typography>
  );
}

export default SortingExplanation;
