import React, { useState } from "react";
import "./main.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { directionModalTogle } from "../../store/reduser/menu/menuSlice";
import { useEffect } from "react";
import createAsync from "../../store/reduser/directions/actions/create";
import editAsync from "../../store/reduser/directions/actions/edit";
import { useCookies } from "react-cookie";

function DireactionModal() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const show = useSelector((store) => store.menu.directionModalTogler);
  const initialData = useSelector((store) => store.direction);
  const [contract, setContract] = useState(initialData);

  const handleClose = () => dispatch(directionModalTogle(false));

  useEffect(() => {
    setContract(initialData);
  }, [initialData]);

  function handleChange(e) {
    let data = contract.attributes;
    if (e.target.name === "price") {
      console.log(parseFloat(e.target.value.replace(/,/g, '')));
      if (e.target.value.length !== 0)
        data = {
          ...data,
          [e.target.name]: parseFloat(e.target.value.replace(/,/g, '')),
        };
      else
        data = {
          ...data,
          [e.target.name]: "",
        };
    } else
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
    console.log(contract.attributes);
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

    dispatch(directionModalTogle(false));
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
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Kontrakt narxi</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      name="price"
                      value={contract?.attributes?.priceNumber?.length === 0 ? "" : (contract?.attributes?.price).toLocaleString()}
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
