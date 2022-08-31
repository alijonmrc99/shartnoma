import React from "react";
import "./main.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { modalToggle } from "../../store/reduser/menu/menuSlice";
import store from "../../store/store";

function UserActions({ user }) {
  const show = useSelector((state) => state.menu.modalTogler);
  const regions = useSelector((store) => store.regions);
  const district = useSelector((store) => store.district);

  // const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(modalToggle(false));

  return (
    <>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Yangi student qo'shish</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row xs={1} md={2}>
                {/* Fistname Input area */}
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ismi</Form.Label>
                    <Form.Control type="text" name="fname" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Familyasi</Form.Label>
                    <Form.Control type="text" name="lname" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Otasining ismi</Form.Label>
                    <Form.Control type="text" name="passportNumber" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Passport raqami</Form.Label>
                    <Form.Control type="text" name="passportNumber" />
                  </Form.Group>
                </Col>
                {/* Region select area */}
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Viloyati</Form.Label>
                    <Form.Select
                      name="region"
                      aria-label="Default select example"
                    >
                      <option>Viloyati tanlang</option>
                      {regions.map((region) => (
                        <option value={region.id} key={region.id}>
                          {region.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label>Tumani</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Tumanni tanlang</option>
                      {district.map((district) => (
                        <option value={district.id} key={district.id}>
                          {district.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Telefon raqami</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1">+998</InputGroup.Text>
                      <Form.Control type="text" name="passportNumber" />
                    </InputGroup>
                  </Form.Group>
                </Col>
                {/* Lastname input area */}

                {/* District select area */}
                <Col></Col>
                {/* Middlename input area */}
                <Col></Col>
                {/* Phone number input area */}
                <Col></Col>
                {/* Passport number input area */}
                <Col></Col>
              </Row>
              <div></div>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="reset">
              Tozalash
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

export default UserActions;
