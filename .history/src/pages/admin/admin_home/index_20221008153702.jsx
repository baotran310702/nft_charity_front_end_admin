import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Typography } from "@mui/material";
const index = () => {
  return (
    <div style={{ background: "#EFF3FD", height: "1016px", width: "1712px" }}>
      <Sidebar />
      <Typography paragraph={true}></Typography>
    </div>
  );
};

export default index;
