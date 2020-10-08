import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "300",
    maxwidth: "600px",
    width: 200,
    height: 99,
    marginTop: theme.spacing(1),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const DisplayCard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={3}
        justify="center"
        Style={{ backgroundColor: "#6200EE", marginTop: "10px" }}
      >
        <Grid
          item
          component={Card}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <ListItem>
            <CardContent className={classes.root}>
              <Typography color="textSecondary" gutterBottom>
                {props.data.date}
              </Typography>
              <Grid display="inline">
                <Typography
                  style={{ display: "inline", marginRight: "140px" }}
                  variant="h5"
                  component="h2"
                  align="left"
                >
                  {props.data.title}
                </Typography>
                <Typography
                  style={{ display: "inline" }}
                  color="textSecondary"
                  align="right"
                >
                  ₹{props.data.amount}
                </Typography>
              </Grid>
              <Typography color="textSecondary">
                NOTE: {props.data.note}
              </Typography>
            </CardContent>
          </ListItem>
        </Grid>
      </Grid>
    </div>
  );
};
export default DisplayCard;
