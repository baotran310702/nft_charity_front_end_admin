import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@material-ui/core";
import Account from "../Account/Account";
import { Grid } from "@mui/material";
import useStyles from "./styles";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:hover": {
        width: "30ch",
      },
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container className={classes.appbar}>
      {/* start left container */}
      <Grid item className={classes.leftContainer} align="left" md={4}>
        <Typography variant="h6">Dashboard</Typography>
      </Grid>
      {/* end left container */}

      {/* start right container */}
      <Grid item className={classes.centerContainer} align="center" md={4}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Grid>
      {/* end right container */}

      {/* start right container */}
      <Grid item className={classes.rightContainer} md={4}>
        <Box className={classes.btn}>
          <Button variant="contained" color="primary">
        </Box>
        <Box className={classes.account}>
          <Typography className={classes.accountName} ml={1}>
            Pham Quang Hoa
          </Typography>
          <Account className={classes.accountAvatar} />
        </Box>
      </Grid>
      {/* end right container */}
    </Grid>
  );
}
