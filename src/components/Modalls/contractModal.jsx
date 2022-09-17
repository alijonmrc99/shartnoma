import React, { useState } from "react";
import "./main.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { contractModalToggle } from "../../store/reduser/menu/menuSlice";
import { useEffect } from "react";
import {
  createContractAsync,
  editContractAsync,
} from "../../store/reduser/contracts/getcontractSlice";
import { useCookies } from "react-cookie";

function ContractModal() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const show = useSelector((store) => store.menu.contractModalTogler);
  const initialData = useSelector((store) => store.contract);
  const [contact, setContract] = useState(initialData);

  const handleClose = () => dispatch(contractModalToggle(false));

  useEffect(() => {
    setContract(initialData);
  }, [initialData]);

  function handleChange(e) {
    let data = contact.attributes;
    data = {
      ...data,
      [e.target.name]: e.target.value,
    };

    setContract({
      id: contact.id,
      attributes: data,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    initialData.id
      ? dispatch(
          editContractAsync({
            token: cookie.userToken,
            body: contact,
          })
        )
      : dispatch(
          createContractAsync({
            token: cookie.userToken,
            body: contact.attributes,
          })
        );
    // dispatch(addContract(createdUser?.body?.data));
    dispatch(contractModalToggle(false));
    setContract(initialData);
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Yo'nalish yaratish</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row xs={1}>
                {/* Fistname Input area */}
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Yo'nalish nomi</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      name="direction"
                      value={contact.attributes.direction}
                    />
                  </Form.Group>
                  {/* Lastname input area */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Kontrakt narxi</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="number"
                      name="price"
                      value={contact.attributes.price}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Yopish
            </Button>
            <Button type="submit" variant="primary">
              Qo'shish
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ContractModal;
