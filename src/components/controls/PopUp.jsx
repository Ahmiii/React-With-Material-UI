import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

const PopUp = (props) => {
  const { title, children, openPopup, setopenPopup } = props;
  return (
    <div>
      <Dialog>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default PopUp;
