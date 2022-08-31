import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <i className="bi bi-trash-fill" />
      </Button>

      <Modal show={show} static onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Foydalanuvchini o'chirish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Siz rostdan ham foydalanuchini o'chirmoqchimisiz
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yopish
          </Button>
          <Button variant="danger" onClick={handleClose}>
            O'chirish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
