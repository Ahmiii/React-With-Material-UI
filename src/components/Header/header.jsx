import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  withStyles,
} from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const styles = {
  header: {
    paddingLeft: "320px",
    width: "100%",
  },
};
const header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <AppBar position="relative">
        <Toolbar>
          <Grid container>
            <Grid item>
              <InputBase />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsActiveIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <ChatIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge color="secondary">
                  <PowerSettingsNewIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(header);
