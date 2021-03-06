import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalComponent = ({ emotion }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reload = () => window.location.reload();

  useEffect(() => {
    const timer = setTimeout(() =>
      handleOpen(), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!emotion) {
    return (
      <div>
        <Modal
          disableBackdropClick
          disableEscapeKeyDown
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">We couldn't detect your face!</h2>
              <p id="transition-modal-description">Can you center it for us please?</p>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => reload()}>Let me try again</Button>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
  return (
    <div>
      <Modal
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">It looks like you're feeling {emotion}</h2>
            <p id="transition-modal-description">Is that correct?</p>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                if (emotion === "neutral") {
                  window.location.href = "/neutraljournal"
                } else if (emotion === "surprised") {
                  window.location.href = "/surprisejournal"
                } else if (emotion === "disgusted") {
                  window.location.href = "/disgustjournal"
                } else if (emotion === "fearful") {
                  window.location.href = "/fearjournal"
                } else if (emotion === "sad") {
                  window.location.href = "/sadjournal"
                } else if (emotion === "angry") {
                  window.location.href = "/angryjournal"
                } else if (emotion === "happy") {
                  window.location.href = "/happyjournal"
                }
              }}>Yes, let's talk about it</Button> <Button color="primary" variant="outlined" onClick={() => reload()}>No, let me try again</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalComponent