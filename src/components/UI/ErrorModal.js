import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./ErrorModal.modal.css";

const Backdrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.onComfirm} />;
};

const ModalOwerLay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onComfirm}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onComfirm={props.onComfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOwerLay
          title={props.title}
          message={props.message}
          onComfirm={props.onComfirm}
        />,
        document.getElementById("ModalOwerLay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
