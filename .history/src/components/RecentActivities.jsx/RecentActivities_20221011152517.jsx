import * as React from "react";

import { Card, Box } from "@mui/material";
import { useStyles } from "../TransactionOverview/styles";
export default function Recents() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box>this is recent</Box>
    </Card>
  );
}
