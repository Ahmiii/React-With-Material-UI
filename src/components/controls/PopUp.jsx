import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Controls from "./controls";
const useStyles = makeStyles((theme) => ({
  dialogeWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogeTitle: {
    paddingRight: "0px",
  },
}));

const PopUp = (props) => {
  const classes = useStyles();
  const { title, children, openPopup, setPopUp } = props;
  const handleOnClose = () => {
    setPopUp(false);
  };
  return (
    <div>
      <Dialog
        open={openPopup}
        onClose={handleOnClose}
        maxWidth="md"
        classes={{ paper: classes.dialogeWrapper }}
      >
        <DialogTitle className={classes.dialogeTitle}>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Controls.ActionButton
              color="secondary"
              onClick={() => setPopUp(false)}
            >
              <CloseIcon />
            </Controls.ActionButton>
          </div>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default PopUp;
