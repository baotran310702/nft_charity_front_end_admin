import * as React from "react";
import { Card, Box, Grid, Typo } from "@mui/material";
import { useStyles } from "./styles";
export default function Overview() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container md={12}>
        <Grid item md={7}>
            Typo
        </Grid>
        <Grid item md={5}></Grid>
      </Grid>
    </Card>
  );
}