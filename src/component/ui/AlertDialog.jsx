import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({
  open,
  setOpen,
  title,
  content,
  type,
  setAction,
}) {
  const handleYes = () => {
    setOpen(false);
    setAction(true);
  };
  const handleNo = () => {
    setOpen(false);
    setAction(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo} autoFocus>
            Отмена
          </Button>
          <Button onClick={handleYes}>{type}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
