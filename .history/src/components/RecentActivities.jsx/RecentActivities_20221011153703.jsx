import * as React from "react";

import { Card, Box } from "@mui/material";
import { useStyles } from "./styles";
export default function Recent() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.box}>
        <p className={classes.header}>Recent Activities</p>
      </Box>
      <Box className={classes.list}>
        <Grid container md={12}>
          <Grid item md={3}></Grid>
        </Grid>
      </Box>
    </Card>
  );
}
