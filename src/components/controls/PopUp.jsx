import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogeWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
}));

const PopUp = (props) => {
  const classes = useStyles();
  const { title, children, openPopup } = props;
  return (
    <div>
      <Dialog
        open={openPopup}
        maxWidth="md"
        classes={{ paper: classes.dialogeWrapper }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default PopUp;
