import React from "react";
import { Table, Button } from "react-bootstrap";
import ConfirmModal from "../Modalls/ConfirmModal";
function BootstrapTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button variant="success">
              <i className="bi bi-pencil-fill" />
            </Button>{" "}
            <ConfirmModal />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
            <Button variant="success" className="success-btn">
              <i className="bi bi-pencil-fill" />
            </Button>
            {"   "}
            <Button variant="danger">
              <i className="bi bi-trash-fill" />
            </Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>
            <Button variant="success" className="success-btn">
              <i className="bi bi-pencil-fill" />
            </Button>
            {"   "}
            <Button variant="danger">
              <i className="bi bi-trash-fill" />
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BootstrapTable;
