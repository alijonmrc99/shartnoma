import React, { useState } from "react";
import "./main.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { modalToggle } from "../../store/reduser/menu/menuSlice";
import { useEffect } from "react";

function UserActions() {
  const show = useSelector((state) => state.menu.modalTogler);
  const regions = useSelector((store) => store.regions);
  const district = useSelector((store) => store.district);
  const initialData = useSelector((store) => store.user);
  const [user, setUser] = useState(initialData);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(modalToggle(false));

  useEffect(() => {
    // console.log(user.attributes.First_name);
    setUser(initialData);
  }, [initialData]);

  function handleChange(e) {
    let attributes = user.attributes;
    attributes = {
      ...attributes,
      [e.target.name]: e.target.value,
    };

    setUser({
      id: user.id,
      attributes,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

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
        <form onSubmit={handleSubmit}>
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
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      name="First_name"
                      value={user.attributes.First_name}
                    />
                  </Form.Group>
                  {/* Lastname input area */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Familyasi</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      name="Last_name"
                      value={user.attributes.Last_name}
                    />
                  </Form.Group>
                  {/* Middlename input area */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Otasining ismi</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      value={user.attributes.Fathers_name}
                      type="text"
                      name="Fathers_name"
                    />
                  </Form.Group>
                  {/* Passport number input area */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Passport raqami</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      value={user.attributes.passport}
                      name="passport"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {/* Region select area */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Viloyati</Form.Label>
                    <Form.Select
                      onChange={handleChange}
                      name="region"
                      value={user.attributes.region}
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
                  {/* District select area */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label>Tumani</Form.Label>
                    <Form.Select
                      onChange={handleChange}
                      name="district"
                      value={user.attributes.district}
                      aria-label="Default select example"
                    >
                      <option value="0">Tumanni tanlang</option>
                      {district.map((district) => (
                        <option value={district.id} key={district.id}>
                          {district.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  {/* Phone number input area */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Telefon raqami</Form.Label>
                    <InputGroup>
                      <InputGroup.Text id="basic-addon1">+998</InputGroup.Text>
                      <Form.Control
                        value={user.attributes.phone}
                        onChange={handleChange}
                        type="text"
                        name="phone"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
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
