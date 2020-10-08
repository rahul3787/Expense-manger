import React, { useEffect } from "react";
import { useState } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

import DisplayCard from "./DisplayCards";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      flexDirection: "column",
      marginRight: "100px",
      backgroundColor: "#6200EE",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  },
  paper: {
    maxHeight: "300",
    maxwidth: "600px",
    width: "320px",
    height: "300px",
  },
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#6200EE",
  },
}));

const Expense = (props) => {
  const classes = useStyles();
  let defaultState = {
    title: "",
    date: "",
    amount: "",
    note: "",
  };
  let defaultStates = {
    title: "rahul",
    date: "2020-10-09",
    amount: "500",
    note: "this is desktop view",
  };
  const [Expenses, setExpense] = useState(defaultState);
  const [newExpenses, setNewExpenses] = useState([defaultStates]);
  const [totalAMounts, setTotalAMounts] = useState();
  const handleTitleChange = (event) => {
    let temp = { ...Expenses };
    temp.title = event.target.value;
    setExpense(temp);
  };
  const handleAmountChange = (event) => {
    let temp = { ...Expenses };
    temp.amount = event.target.value;
    setExpense(temp);
  };

  // h
  //b
  const handleNoteChange = (event) => {
    let temp = { ...Expenses };
    temp.note = event.target.value;
    setExpense(temp);
  };
  const handleDateChange = (event) => {
    let temp = { ...Expenses };
    temp.date = event.target.value;
    setExpense(temp);
  };

  const listOfItem = () => {
    setNewExpenses((prevValue) => {
      return [...prevValue, Expenses];
    });
    setExpense(defaultState);
  };
  useEffect(() => {
    let totalAmount = [...newExpenses];
    var sum = totalAmount.reduce(function (prev, cur) {
      return parseInt(prev) + parseInt(cur.amount);
    }, 0);
    setTotalAMounts(sum);
  }, [newExpenses]);

  const demoMethod = () => {
    props.sendData(totalAMounts);
  };
  demoMethod();
  return (
    <div className={classes.background}>
      <Grid container justify="center" className={classes.root}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid>
            <TextField
              id="standard-basic"
              value={Expenses.title}
              onChange={handleTitleChange}
              label="Title"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              id="filled-basic"
              label="Amount"
              value={Expenses.amount}
              onChange={handleAmountChange}
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-basic"
              label="Note"
              value={Expenses.note}
              onChange={handleNoteChange}
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              label="Date"
              type="date"
              defaultValue="2020-10-09"
              style={{ backgroundColor: "white" }}
              onChange={handleDateChange}
              className={classes.textField}
              style={{ width: "217px" }}
            />
          </Grid>
          <Button
            variant="contained"
            style={{ backgroundColor: "green" }}
            className={classes.button}
            startIcon={<AddIcon />}
            color="primary"
            onClick={listOfItem}
          >
            ADD EXPENSE
          </Button>
        </form>
        <br />
        <ol>
          <Grid>
            <Paper className={classes.paper} style={{ overflow: "auto" }}>
              {newExpenses.map((val, index) => {
                return <DisplayCard key={index} data={val} />;
              })}
            </Paper>
          </Grid>
        </ol>
      </Grid>
    </div>
  );
};

export default Expense;
