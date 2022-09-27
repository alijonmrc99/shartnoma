import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ConfirmModal from "../components/Modalls/ConfirmModal";
import DataTables from "../components/table/dataTable";
import ToastMsg from "../components/toasts/ToastMsg";
import {
  defaultContr,
  selectedContr,
} from "../store/reduser/directions/directionSlice";
import getAsync from "../store/reduser/contract/actions/getData";
import { contractModalToggle } from "../store/reduser/menu/menuSlice";
import ContractModal from "../components/Modalls/conractModal";
import { defaultUser } from "../store/reduser/user/userSlice";

function ContractTypes() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const contracts = useSelector((store) => store.contracts);

  useEffect(() => {
    dispatch(getAsync({ token: cookie.userToken, path: "olganlar" }));
  }, []);

  const handleShow = (e) => {
    //   dispatch(
    //     selectedContr(
    //       contracts.body.data.find((item) => item.id == e.currentTarget.id)
    //     )
    //   );
    //   dispatch(contractModalToggle(true));
  };

  const defaultShow = (e) => {
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
    // {
    //   name: "Yo'nalishi",
    //   selector: (row) => row.contract_id,
    //   //   width: "250px",
    // },
    // {
    //   name: "Kontrakt raqami",
    //   selector: (row) => row.attributes.contract_number,
    //   width: "100px",
    // },
    // {
    //   name: "Boshlanish sanasi",
    //   selector: (row) => row.attributes.beginning_date,
    //   sortable: true,
    //   //   width: "250px",
    // },
    // {
    //   name: "Tugash sanasi",
    //   selector: (row) => row.attributes.due_date,
    //   sortable: true,
    //   //   width: "250px",
    // },

    {
      name: "Harakatlar",
      width: "130px",
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
              toast={toast}
            />
          </>
        ) : (
          <Button id={row.id} onClick={defaultShow} className="success-btn">
            <i className="bi bi-person-plus-fill"></i>
          </Button>
        ),
    },
  ];

  return (
    <div>
      <div>
        <h2 className="border-bottom mb-2">Shartnoma berish</h2>

        <ToastMsg />
        <DataTables columns={columns} data={contracts.body} />
        <ContractModal />
      </div>
    </div>
  );
}

export default ContractTypes;
