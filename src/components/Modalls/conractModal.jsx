import React, { useState, useEffect } from "react";
import "./main.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { contractModalToggle } from "../../store/reduser/menu/menuSlice";
import { useCookies } from "react-cookie";
import getAsync from "../../store/reduser/directions/actions/getData";

function ContractModal() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const directions = useSelector((store) => store.directionTypes);
  useEffect(() => {
    dispatch(getAsync({ token: cookie.userToken, path: "contract-types" }));
  }, []);
  const show = useSelector((store) => store.menu.contractModalToggler);

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
    // initialData.id
    //   ? dispatch(
    //       editAsync({
    //         token: cookie.userToken,
    //         body: contract,
    //         path: "contract-types/" + initialData.id,
    //       })
    //     )
    //   : dispatch(
    //       createAsync({
    //         token: cookie.userToken,
    //         body: contract.attributes,
    //         path: "contract-types",
    //       })
    //     );
    console.log(contract);
    // dispatch(contractModalToggle(false));
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
                    <Form.Label>Kontrakt raqami</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      name="contract_number"
                      value={contract?.attributes?.direction}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Shartnoma boshlanish sanasi</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="date"
                      name="beginning_date"
                      value={contract?.attributes?.price}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Shartnoma tugash sansi</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="date"
                      name="due_date"
                      value={contract?.attributes?.price}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Yo'nalisni tanlang</Form.Label>
                    <Form.Select onChange={handleChange} name="contract_type">
                      <option>Tanlang</option>
                      {directions?.body?.data?.map((direction) => (
                        <option key={direction.id} value={direction.id}>
                          {direction.attributes.direction}
                        </option>
                      ))}
                    </Form.Select>
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
