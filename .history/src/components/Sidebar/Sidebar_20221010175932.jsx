import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CampaignIcon from "@mui/icons-material/Campaign";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../../assets/litecoin.svg";
import bottomSideBar from "../../assets/bottomSidebarImage.svg";
import useStyles from "./styles";

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  return (
    <Box className={classes.drawer}>
      {/* reset css */}
      <CssBaseline />
      {/*logo va  option  */}
      <Box className={classes.drawer__top}>
        {/* start phan header */}
        <Box className={classes.drawer__header}>
          <Box className={classes.drawer__logo}>
            <img className={classes.logo__image} src={logo} />
            <Typography className={classes.logo__title} ml={1}>
              nft charity
            </Typography>
          </Box>
        </Box>
        {/* end phan header */}
        <Divider />

        {/* start phan option */}
        <List>
          {
            <React.Fragment>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FormatListBulletedIcon />
                  </ListItemIcon>
                  <ListItemText primary="List NFT" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CampaignIcon />
                  </ListItemIcon>
                  <ListItemText primary="Campaign" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Auction" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          }
        </List>
        {/* end phan option */}
        <Divider />
      </Box>
      {/* end phan logo va option */}
      {/* footer */}
      <Box className={classes.drawer__bottom}>
        <img className={classes.bottom__image} src={bottomSideBar} />
      </Box>
    </Box>
  );
}
