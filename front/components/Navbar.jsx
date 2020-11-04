import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap'
import LoginContainer from '../containers/LoginContainer'

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        {<LoginContainer handleClose={handleClose} />}

      </Modal>
    </>
  );
}

export default Navbar