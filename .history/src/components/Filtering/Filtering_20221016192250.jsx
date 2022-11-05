import React from "react";
import { Card, Box, Typography } from "@mui/material";
// import date
import MyDatePicker from "../DatePicker/DatePicker";
export default function MyFiltering() {
  return (
    <Card sx={{ padding: `20px` }}>
      Bõ
      <Typography>This is filtering</Typography>
      <MyDatePicker />
    </Card>
  );
}