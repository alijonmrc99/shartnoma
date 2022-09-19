import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ConfirmModal from "../components/Modalls/ConfirmModal";
import ContractModal from "../components/Modalls/contractModal";
import DataTables from "../components/table/dataTable";
import ToastMsg from "../components/toasts/ToastMsg";
import {
  defaultContr,
  selectedContr,
} from "../store/reduser/directions/directionSlice";
import getAsync from "../store/reduser/directions/actions/getData";
import { contractModalToggle } from "../store/reduser/menu/menuSlice";

function ContractTypes() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const contracts = useSelector((store) => store.directionTypes);

  useEffect(() => {
    dispatch(getAsync({ token: cookie.userToken, path: "contract-types" }));
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
    dispatch(defaultContr());
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
      name: "Yo'nalish nomi",
      selector: (row) => row.attributes.direction,
      sortable: true,
    },
    {
      name: "Kontrakt norxi",
      selector: (row) => row.attributes.price,
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
        <h2 className="border-bottom mb-2">Yo'nalishlar ro'yaxti</h2>
        <div className="actions mb-2 d-flex justify-content-end">
          <Button className="peremium-btn me-2" onClick={dedaultShow}>
            <i style={{ color: "" }} className="bi bi-person-plus-fill"></i>{" "}
            Yo'nalish qo'shish
          </Button>
        </div>
        <ToastMsg />
        <DataTables columns={columns} data={contracts.body.data} />
        <ContractModal />
      </div>
    </div>
  );
}

export default ContractTypes;
