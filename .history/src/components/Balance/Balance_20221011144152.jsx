import * as React from "react";
import { Card, Box } from "@mui/material";
import addBtn from "../../assets/addBtn.svg";
import { useStyles } from "./styles";
export default function Balance() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box className={classes.header}>
        <p className={classes.title}>Balances</p>
        <img className={cals}src={addBtn} alt="addBtn" />
      </Box>
    </Card>
  );
}