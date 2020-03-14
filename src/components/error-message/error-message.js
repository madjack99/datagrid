import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import InitialList from '../initial-list';

const useStyles = makeStyles({
  errorAlert: {
    '& .MuiAlert-icon': {
      fontSize: 40,
    },
  },
});

export default function ErrorMessage() {
  const classes = useStyles();
  return (
    <Alert
      className={classes.errorAlert}
      severity='info'
      action={<InitialList />}
    >
      Nothing has been found, please return to initial list and try again.
    </Alert>
  );
}
