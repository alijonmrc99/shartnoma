import React, { useEffect } from "react";
import DataTables from "../components/table/dataTable";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userModalToggle } from "../store/reduser/menu/menuSlice";
import { defaultUser } from "../store/reduser/user/userSlice";
import { useCookies } from "react-cookie";
import createExcel from "../components/CreateExcell/createExcell";
import getAsync from "../store/reduser/monitoring/actions/getData";
import getAsync1 from "../store/reduser/contract/actions/getData";
import PaidContractModal from "../components/Modalls/paidContractModal";
import { Link } from "react-router-dom";

// import ConfirmModal from "../Modalls/ConfirmModal";

function Monitoring() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const data = useSelector((store) => store.monitoring);
  const haveConractUsers = useSelector((store) => store.contracts);

  useEffect(() => {
    dispatch(getAsync({ token: cookie.userToken, path: "payment" }));
    dispatch(
      getAsync1({ token: cookie.userToken, path: "contracts?populate=*" })
    );
  }, [dispatch, cookie.userToken]);

  const handleShow = (e) => {
    const id = e.currentTarget.id;
    haveConractUsers.body.data.forEach((element) => {
      if (+element.attributes.student.data.id === +id) {
        localStorage.setItem("selectStudent", JSON.stringify(element));
      }
      console.log();
    });
  };

  const makeExcell = () => {
    createExcel(data.body.data);
  };

  const columns = [
    {
      name: "#",
      selector: (row) => row.student_id,
      sortable: true,
      width: "4rem",
    },
    {
      name: "F.I.SH",
      selector: (row) =>
        `${row?.first_name} ${row?.last_name} ${row?.fathers_name}`,
      sortable: true,
      width: "300px",
    },
    {
      name: "Passport raqami",
      selector: (row) => row.passport,
    },
    {
      name: "Telefon raqami",
      selector: (row) => row.phone,
    },
    {
      name: "Harakatlar",
      width: "130px",
      selector: (row) => (
        <div id={row.student_id} onClick={handleShow}>
          <Link
            to={row.student_id.toString()}
            className="success-btn btn border-0 rounded-0"
          >
            <i className="bi bi-eye-fill" />
          </Link>
        </div>
      ),
    },
  ];

  const defaultShow = () => {
    dispatch(userModalToggle(true));
    dispatch(defaultUser());
  };

  return (
    <div>
      <h2 className="border-bottom mb-2">To'lovlar ro'yaxti</h2>
      <div className="actions mb-2 d-flex justify-content-end">
        <Button className="peremium-btn me-2" onClick={defaultShow}>
          <i style={{ color: "" }} className="bi bi-person-plus-fill"></i>{" "}
          To'lov qo'shish
        </Button>
        <Button className="peremium-btn" onClick={makeExcell}>
          <i style={{ color: "" }} className="bi bi-filetype-xlsx"></i> Excelda
          yuklash
        </Button>
      </div>
      <DataTables columns={columns} data={data.body} />
      <PaidContractModal users={haveConractUsers} />
    </div>
  );
}

export default Monitoring;
