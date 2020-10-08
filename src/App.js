import React, { useState } from "react";
import Expense from "./component/expense";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

function App() {
  
  const [total, setTotal] = useState();
  let getData = (val) => {
    // do not forget to bind getData in constructor
    setTotal(val);
  };

  return (
    <Grid style={{ backgroundColor: "#6200EE", height: "100%" }}>
      <Grid container justify="center">
        <Typography
          variant="h3"
          style={{ display: "inline", marginRight: "250px", color: "white" }}
        >
          MY EXPENSE
        </Typography>
        <Typography
          variant="h3"
          style={{ display: "inline", marginRight: "60px", color: "white" }}
          align="right"
        >
          Total: {total}
        </Typography>
      </Grid>
      <Divider />

      <Expense sendData={getData} />

      {/* <DisplayCard  /> */}
    </Grid>
  );
}

export default App;
