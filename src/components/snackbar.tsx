import React, {useState} from "react";
import {Snackbar as CoreSnackbar} from '@material-ui/core';
import {Alert} from "@material-ui/lab";

type SnackbarProps = {
  variant: 'error'|'success'|'warning'|'info',
  message: string
}

const Snackbar = ({variant, message}: SnackbarProps) => {
  // Snackbar auto-close state
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
      <CoreSnackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant}>
          {message}
        </Alert>
      </CoreSnackbar>
  );
};

export default Snackbar;