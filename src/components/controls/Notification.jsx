import React from "react";
import { Snackbar, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
}));

const Notification = (props) => {
  const classes = useStyles();
  const { notify, setnotify } = props;
  const HandleClose = () => {
    setnotify({
      ...notify,
      isOpen: false,
    });
  };
  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={HandleClose}
    >
      <Alert onClose={HandleClose}>{notify.message}</Alert>
    </Snackbar>
  );
};

export default Notification;
