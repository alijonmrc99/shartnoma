import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
function ContractTypes() {

  return (
    <div className="contracts">
      <h2 className="border-bottom mb-4 bp-2">Shartnoma berish</h2>
      <Row>
        <Col>
          <h4 className="border-bottom">
            <NavLink style={{ color: "#333 !important" }} to="receive">
              Shartnoma olganlar
            </NavLink>
          </h4>
        </Col>
        <Col>
          <h4 className="border-bottom">
            <NavLink to="notreceive">Shartnoma olmaganlar</NavLink>
          </h4>
        </Col>
      </Row>
      <Outlet />
    </div>
  );
}

export default ContractTypes;
