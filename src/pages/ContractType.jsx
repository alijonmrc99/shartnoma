import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import getAsync from "../store/reduser/contract/actions/getData"
import { Button } from 'react-bootstrap';
import ConfirmModal from '../components/Modalls/ConfirmModal'
import { selectedContr, defaultContr } from '../store/reduser/contract/contractSlice'
import contractModalToggle from '../store/reduser/menu/menuSlice'
function ContractTypes() {

  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const contracts = useSelector((store) => store.contracts);

  useEffect(() => {
    dispatch(getAsync({ token: cookie.userToken, path: "olganlar" }));
  }, []);

  const handleShow = (e) => {
    const item = contracts.body.find((item) => item.id == e.currentTarget.id);

    const data = {
      contract_number: item.contract_number,
      beginning_date: item.beginning_date,
      due_date: item.due_date,
      contract_type: item.contract_type,
      student: item.student,
      id: item.contract_id,
    };

    console.log(data);
    dispatch(selectedContr(data));
    dispatch(contractModalToggle(true));
  };

  const defaultShow = (e) => {
    console.log(e.currentTarget.id);
    dispatch(defaultContr(e.currentTarget.id));
    dispatch(contractModalToggle(true));
  };

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "4rem",
    },
    {
      name: "FISH",
      selector: (row) => `${row.last_name} ${row.first_name}`,
      // width: "180px",
    },
    {
      name: "Passport raqami",
      selector: (row) => row.passport,
      // width: "150px",
    },
    {
      name: "Kontrakt raqami",
      selector: (row) => row.contract_number,
      width: "100px",
    },
    {
      name: "Boshlanish sanasi",
      selector: (row) => row.beginning_date,
      sortable: true,
      //   width: "250px",
    },
    {
      name: "Tugash sanasi",
      selector: (row) => row.due_date,
      sortable: true,
      //   width: "250px",
    },
    {
      name: "Harakatlar",
      width: "180px",
      selector: (row) =>
        row.contract_id ? (
          <>
            <Button
              id={row.id}
              onClick={handleShow}
              className="success-btn me-2"
            >
              <i className="bi bi-pencil-fill" />
            </Button>
            <ConfirmModal
              id={row.id}
              path={`contracts/${row.contract_id}`}
            />
            {/* <CreateQRCode id={row.id} /> */}
          </>
        ) : (
          <Button id={row.id} onClick={defaultShow} className="success-btn">
            <i className="bi bi-person-plus-fill"></i>
          </Button>
        ),
    },
  ];

  return (
    <div className="contracts">
      <h2 className="border-bottom mb-4 bp-2">Sharnoma berish</h2>
      <Row>
        <Col><h4 className="border-bottom"><NavLink style={{ color: "#333 !important" }} to="receive">Sharnoma olganlar</NavLink></h4></Col>
        <Col><h4 className="border-bottom"><NavLink to="notreceive">Sharnoma olmaganlar</NavLink></h4></Col>
      </Row>
      <Outlet />
    </div>
  );
}

export default ContractTypes;
