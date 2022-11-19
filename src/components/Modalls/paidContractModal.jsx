import React, { useEffect, useState } from "react";
import "./main.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { userModalToggle } from "../../store/reduser/menu/menuSlice";
import { useCookies } from "react-cookie";
import createAsync from "../../store/reduser/monitoring/actions/create";
import { useRef } from "react";
import getAsync from "../../store/reduser/monitoring/actions/getData";

function PaidContractModal({ users }) {
  const show = useSelector((state) => state.menu.userModalTogler);
  const studentId = useRef()
  if (users)
    users = users?.body?.data?.map(item => ({
      username: item.attributes.student.data.attributes.First_name +
        " " + item.attributes.student.data.attributes.Last_name +
        " " + item.attributes.student.data.attributes.Fathers_name,
      id: item.attributes.student.data.id + "," + item.id
    }))
  const [user, setUser] = useState({
    check_number: "",
    summa: "",
    comment: "",
    payed_date: "",
    student: "",
    contract: "",
  });

  const [cookie] = useCookies();

  const dispatch = useDispatch();
  const handleClose = () => dispatch(userModalToggle(false));

  useEffect(() => {

  }, []);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const [stundetId, contractId] = user.contract.split(",");
    dispatch(
      createAsync({
        token: cookie.userToken,
        body: {
          ...user,
          student: { id: stundetId },
          contract: { id: contractId }
        },
        path: "paid-contract-fees?populate=*",
      })
    );
    window.location.reload();
    dispatch(getAsync({ token: cookie.userToken, path: "/payment" }))
    setUser({
      check_number: "",
      summa: "",
      comment: "",
      payed_date: "",
      student: "",
      contract: "",
    })
    dispatch(userModalToggle(false));
  }

  return (
    <>
      <Modal
        show={show}
        size="md"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Yangi kontrakt to'lov qo'shish</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>

                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Kontrakt to'lovchini tanlang</Form.Label>
                    <Form.Select
                      value={user.contract}
                      onChange={handleChange}
                      name="contract"
                      ref={studentId}
                    >
                      <option>Tanlang</option>
                      {users?.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.username}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Chek raqami</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      name="check_number"
                      value={user.check_number}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>To'langan sanasi</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="date"
                      name="payed_date"
                      value={user.payed_date}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>To'langan summa</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      value={user.summa}
                      type="number"
                      name="summa"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Izoh</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      value={user.comment}
                      name="comment"
                    />
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

export default PaidContractModal;
