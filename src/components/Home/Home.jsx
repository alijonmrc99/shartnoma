import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./main.css";
function Home() {
  return (
    <>
      <Row xs={1} md={2} lg={2} xxl={3}>
        <Col>
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-header">Jami o'quvchilar</h3>
              <p className="card-text">123</p>
              <div className="d-flex justify-content-end">
                <Button className="button-success">Ko'rish</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-header">Kantakni to'laganlar</h3>
              <p className="card-text">123</p>
              <div className="d-flex justify-content-end">
                <Button className="button-success">Ko'rish</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-header">To'lamaganlar</h3>
              <p className="card-text">123</p>
              <div className="d-flex justify-content-end">
                <Button className="button-success">Ko'rish</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-header">Hisobot</h3>
              <p className="card-text">123</p>
              <div className="d-flex justify-content-end">
                <Button className="button-success">Ko'rish</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Home;
