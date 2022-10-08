import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

function ContractTypes() {
  return (
    <div className="contracts">
      <h2 className="border-bottom mb-4 bp-2">Sharnoma berish</h2>
      <Row>
        <Col><h4 className="border-bottom"><NavLink Link style={{ color: "#333 !important" }} to="receive">Sharnoma olganlar</NavLink></h4></Col>
        <Col><h4 className="border-bottom"><NavLink to="notreceive">Sharnoma olmaganlar</NavLink></h4></Col>
      </Row>
      <Outlet />
    </div>
  );
}

export default ContractTypes;
