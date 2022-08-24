import { Button, Spinner } from "react-bootstrap";
import React from "react";
import DataTables from "./dataTable";

function Container() {
  return (
    <div>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="false"
        />
        <span className="visually d-inline-block ms-2">Loading...</span>
      </Button>
      <DataTables />
    </div>
  );
}

export default Container;
