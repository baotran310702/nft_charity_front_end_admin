import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { Icon } from "@material-ui/core";
import img1 from "../../assets/bitcoin.svg";
import img2 from "../../assets/data_transfer.svg";

export default function BasicCard() {
  return (
    <Card sx={{ width: `275px`, height: `178px` }}>
      <CardContent>
        <img src={img1} alt="anh_bit_coin" />
      </CardContent>
      <CardContent sx={{ display: "inline-flex" }}>
        <Typography variant="h7">BNB</Typography>
        <img src={img2} alt="data_transfer" />
        <Typography variant="h6">USB</Typography>
      </CardContent>
    </Card>
  );
}