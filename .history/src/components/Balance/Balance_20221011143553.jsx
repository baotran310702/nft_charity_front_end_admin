import * as React from "react";
import { Card, Box } from "@mui/material";

import { useStyles } from "./styles";
export default function Balance() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box classN></Box>
      <p className={classes.Title}>Balances</p>
    </Card>
  );
}