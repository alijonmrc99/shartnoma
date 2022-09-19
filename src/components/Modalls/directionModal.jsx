import React, { useState } from "react";
import "./main.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { contractModalToggle } from "../../store/reduser/menu/menuSlice";
import { useEffect } from "react";
import createAsync from "../../store/reduser/directions/actions/create";
import editAsync from "../../store/reduser/directions/actions/edit";
import { useCookies } from "react-cookie";

function DireactionModal() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const show = useSelector((store) => store.menu.contractModalTogler);
  const initialData = useSelector((store) => store.direction);
  const [contract, setContract] = useState(initialData);

  const handleClose = () => dispatch(contractModalToggle(false));

  useEffect(() => {
    setContract(initialData);
  }, [initialData]);

  function handleChange(e) {
    let data = contract.attributes;
    data = {
      ...data,
      [e.target.name]: e.target.value,
    };

    setContract({
      id: contract.id,
      attributes: data,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    initialData.id
      ? dispatch(
          editAsync({
            token: cookie.userToken,
            body: contract,
            path: "contract-types/" + initialData.id,
          })
        )
      : dispatch(
          createAsync({
            token: cookie.userToken,
            body: contract.attributes,
            path: "contract-types",
          })
        );

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
                      value={contract?.attributes?.direction}
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
                      value={contract?.attributes?.price}
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

export default DireactionModal;
