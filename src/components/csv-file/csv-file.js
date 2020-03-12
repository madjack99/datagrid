import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10,
  },
}));

function CsvFile({ personList }) {
  const classes = useStyles();

  const downloadCsv = () => {
    let csv = 'ID,NAME,AGE,MARRIED,STATE,COMPANY,JOB,SALARY\n';
    personList.forEach((item, index) => {
      const itemValuesList = Object.values(item);
      console.log(itemValuesList);
      itemValuesList[0] = index;
      itemValuesList[5] = itemValuesList[5].replace(/,/, ' ');
      itemValuesList[6] = itemValuesList[6].replace(/,/, ' ');
      csv += itemValuesList.join(',');
      csv += '\n';
    });

    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'people.csv';
    hiddenElement.click();
  };

  return (
    <div>
      <Button
        className={classes.root}
        variant='contained'
        color='primary'
        onClick={downloadCsv}
      >
        Download CSV file
      </Button>
    </div>
  );
}

const mapStateToProps = ({ personList }) => ({
  personList,
});

export default connect(mapStateToProps)(CsvFile);
