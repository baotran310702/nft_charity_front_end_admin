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
        <Box className={classes.box_title}>Recent Activities</Box>
        <Box className={classes.box_list}>
          <Grid container className={classes.list} md={12}>
            <Grid item className={classes.listItem} md={12}>
              <Grid item md={3}>
                <img src={bitcoinSVG} alt="bitcoin" />
              </Grid>
              <Grid item md={3}>
                Bitcoin
              </Grid>
              <Grid item md={3}>
                10:45:16
              </Grid>
              <Grid item md={3}>
                4
              </Grid>
            </Grid>
            <Grid item className={classes.listItem} md={12}>
              <Grid item md={3}>
                5
              </Grid>
              <Grid item md={3}>
                6
              </Grid>
              <Grid item md={3}>
                7
              </Grid>
              <Grid item md={3}>
                8
              </Grid>
            </Grid>
            <Grid item className={classes.listItem} md={12}>
              <Grid item md={3}>
                9
              </Grid>
              <Grid item md={3}>
                10
              </Grid>
              <Grid item md={3}>
                11
              </Grid>
              <Grid item md={3}>
                12
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}