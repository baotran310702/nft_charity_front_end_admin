import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CampaignIcon from "@mui/icons-material/Campaign";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import PrimarySearchAppBar from "../Appbar/appbar";
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* this is the app bar */}
      <PrimarySearchAppBar />

      {/* this is the drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
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
        <Divider />
      </Drawer>
      <Box>
        <Toolbar>
          <Typography paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            totam ex, tempora sequi sit soluta tempore, laboriosam provident
            mollitia voluptates voluptate velit. Reiciendis nihil sit, optio
            nisi animi perspiciatis voluptates.
          </Typography>
        </Toolbar>
      </Box>
    </Box>
  );
}
