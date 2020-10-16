import React from "react";
import Controls from "./controls";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
const useStyles = makeStyles((theme) => ({
  dialoge: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogeContent: {
    textAlign: "center",
  },
  dialogeAction: {
    justifyContent: "center",
  },
  dialogeTitle: {
    textAlign: "center",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      cursor: "defaul",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));

const Conformation = (props) => {
  const classes = useStyles();
  const { conformDialoge, setconformDialoge } = props;
  return (
    <Dialog open={conformDialoge.isOpen} classes={{ paper: classes.dialoge }}>
      <DialogTitle className={classes.dialogeTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogeContent}>
        <Typography variant="h6">{conformDialoge.title}</Typography>
        <Typography variant="subtitle2">{conformDialoge.subtitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogeAction}>
        <Controls.Button
          text="No"
          color="defaul"
          onClick={() => {
            setconformDialoge({
              ...conformDialoge,
              isOpen: false,
            });
          }}
        />
        <Controls.Button
          text="Yes"
          color="secondary"
          onClick={conformDialoge.onConform}
        />
      </DialogActions>
    </Dialog>
  );
};

export default Conformation;
