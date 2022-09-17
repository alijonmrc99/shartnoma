import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import deleteContractAsync from "../../store/reduser/contracts/delete";
import ToastMsg from "../toasts/ToastMsg";

function ConfirmModal({ id }) {
  const [show, setShow] = useState(false);
  const [cookie] = useCookies();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleSubmit = () =>
    dispatch(deleteContractAsync({ id, token: cookie.userToken }));

  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <i className="bi bi-trash-fill" />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Foydalanuvchini o'chirish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Siz rostdan ham foydalanuchini o'chirmoqchimisiz
          <ToastMsg />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yopish
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            O'chirish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
