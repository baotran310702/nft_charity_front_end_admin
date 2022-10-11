import * as React from "react";
import bitcoinSVG from "../../assets/bitcoin.svg";
import ethereumSVG from "../../assets/ethereum.svg";
import litecoinSVG from "../../assets/litecoin.svg";
import binancecoinSVG from "../../assets/binancecoin.svg";
import { Card, Box, Grid } from "@mui/material";
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
          <Grid item md={3}>
            <img src={bitcoin} alt="" />
          </Grid>
          <Grid item md={3}></Grid>
          <Grid item md={3}></Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Box>
    </Card>
  );
}
