import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function SimpleTable({ personList }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Age</TableCell>
            <TableCell align='right'>Married</TableCell>
            <TableCell align='right'>State</TableCell>
            <TableCell align='right'>Company</TableCell>
            <TableCell align='right'>Job</TableCell>
            <TableCell align='right'>Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personList.map(row => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.age}</TableCell>
              <TableCell align='right'>{row.married}</TableCell>
              <TableCell align='right'>{row.state}</TableCell>
              <TableCell align='right'>{row.company}</TableCell>
              <TableCell align='right'>{row.job}</TableCell>
              <TableCell align='right'>{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = ({ personList }) => ({
  personList,
});

export default connect(mapStateToProps)(SimpleTable);
