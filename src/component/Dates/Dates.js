import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Box } from '@material-ui/core';


const Dates = () => {
  const [formSelectedDate, setFormSelectedDate] = React.useState(new Date());
  const [toSelectedDates, setToSelectedDates] = React.useState(new Date());

  const handleDateChange = (date) => {
    setFormSelectedDate(date);
  };
  const handleDateChanges = (date) => {
    setToSelectedDates(date);
  };
  


  

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" display="flex">
        <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ height: 100 }}
      >
        <Box p={1}>
          <KeyboardDatePicker
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Form"
            value={formSelectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            required
          />
        </Box>
        <Box p={1}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="To"
            format="dd/MM/yyyy"
            value={toSelectedDates}
            onChange={handleDateChanges}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            required
          />
        </Box>
      </Box>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default Dates;