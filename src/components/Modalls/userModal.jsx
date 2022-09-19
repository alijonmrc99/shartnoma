import React, { useState } from "react";
import "./main.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { userModalToggle } from "../../store/reduser/menu/menuSlice";
import { useEffect } from "react";
import editAsync from "../../store/reduser/user/actions/edit";
import createAsync from "../../store/reduser/user/actions/create";
import { useCookies } from "react-cookie";

function UserActions() {
  const show = useSelector((state) => state.menu.userModalTogler);
  const regions = useSelector((store) => store.regions);
  const district = useSelector((store) => store.district);
  const initialData = useSelector((store) => store.user);
  const [user, setUser] = useState(initialData);
  const [cookie] = useCookies();

  const dispatch = useDispatch();
  const handleClose = () => dispatch(userModalToggle(false));

  useEffect(() => {
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
    initialData.id
      ? dispatch(
          editAsync({
            token: cookie.userToken,
            body: user,
            path: "students/" + initialData.id,
          })
        )
      : dispatch(
          createAsync({
            token: cookie.userToken,
            body: user.attributes,
            path: "students",
          })
        );
    dispatch(userModalToggle(false));
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
                    {user.attributes.region === 0 ? (
                      <Form.Select disabled name="district">
                        {" "}
                        <option value="0">Tumanni tanlang</option>
                      </Form.Select>
                    ) : (
                      <Form.Select
                        onChange={handleChange}
                        name="district"
                        value={user.attributes.district}
                      >
                        <option value="0">Tumanni tanlang</option>
                        {district
                          .filter(
                            (item) => item.region_id === user.attributes.region
                          )
                          .map((district) => (
                            <option value={district.id} key={district.id}>
                              {district.name}
                            </option>
                          ))}
                      </Form.Select>
                    )}
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
                        type="number"
                        name="phone"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
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
