import * as React from "react";

import { Card, Box } from "@mui/material";
imp
export default function Recent() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.box}>this is recent</Box>
    </Card>
  );
}