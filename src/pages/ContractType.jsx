import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ConfirmModal from "../components/Modalls/ConfirmModal";
import DataTables from "../components/table/dataTable";
import ToastMsg from "../components/toasts/ToastMsg";
import { selectedContr } from "../store/reduser/directions/directionSlice";
import getAsync from "../store/reduser/contract/actions/getData";
import { contractModalToggle } from "../store/reduser/menu/menuSlice";
import ContractModal from "../components/Modalls/conractModal";
import { defaultUser } from "../store/reduser/user/userSlice";

function ContractTypes() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const contracts = useSelector((store) => store.contracts);

  useEffect(() => {
    dispatch(
      getAsync({ token: cookie.userToken, path: "contracts?populate=*" })
    );
  }, []);

  const handleShow = (e) => {
    dispatch(
      selectedContr(
        contracts.body.data.find((item) => item.id == e.currentTarget.id)
      )
    );

    dispatch(contractModalToggle(true));
  };

  const dedaultShow = () => {
    dispatch(contractModalToggle(true));
    dispatch(defaultUser());
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
      selector: (row) =>
        `${row.attributes.student.data.attributes.Last_name} ${row.attributes.student.data.attributes.First_name}`,
      width: "180px",
    },
    {
      name: "Passport raqami",
      selector: (row) => row.attributes.student.data.attributes.passport,
      width: "150px",
    },
    {
      name: "Yo'nalishi",
      selector: (row) => row.attributes.contract_type.data.attributes.direction,
      //   width: "250px",
    },
    {
      name: "Kontrakt raqami",
      selector: (row) => row.attributes.contract_number,
      width: "100px",
    },
    {
      name: "Boshlanish sanasi",
      selector: (row) => row.attributes.beginning_date,
      sortable: true,
      //   width: "250px",
    },
    {
      name: "Tugash sanasi",
      selector: (row) => row.attributes.due_date,
      sortable: true,
      //   width: "250px",
    },

    {
      name: "Harakatlar",
      width: "130px",
      selector: (row) => (
        <>
          <Button id={row.id} onClick={handleShow} className="success-btn">
            <i className="bi bi-pencil-fill" />
          </Button>{" "}
          <ConfirmModal path={`contract-types/${row.id}`} toast={toast} />
        </>
      ),
    },
  ];

  return (
    <div>
      <div>
        <h2 className="border-bottom mb-2">Shartnoma berish</h2>
        <Button className="peremium-btn me-2" onClick={dedaultShow}>
          <i style={{ color: "" }} className="bi bi-person-plus-fill"></i>{" "}
          Foyfalanuvchi qo'shish
        </Button>
        <ToastMsg />
        <DataTables columns={columns} data={[]} />
        <ContractModal />
      </div>
    </div>
  );
}

export default ContractTypes;
