import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ConfirmModal from "../components/Modalls/ConfirmModal";
import UserActions from "../components/Modalls/Modal";
import DataTables from "../components/table/dataTable";
import ToastMsg from "../components/toasts/ToastMsg";
import { getContracts } from "../store/reduser/contracts/contract";
import { modalToggle } from "../store/reduser/menu/menuSlice";

function ContractTypes() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const contracts = useSelector((store) => store.contractTypes.body.data);
  useEffect(() => {
    dispatch(getContracts(cookie.userToken));
  }, []);
  const handleShow = (e) => {
    // dispatch(selectedUser(data.find((user) => user.id == e.currentTarget.id)));

    dispatch(modalToggle(true));
  };

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "4rem",
    },
    {
      name: "Kontract nomi",
      selector: (row) => row.attributes.direction,
      sortable: true,
      //   width: "250px",
    },
    {
      name: "Kontract norxi",
      selector: (row) => row.attributes.price,
      sortable: true,
      //   width: "250px",
    },

    {
      name: "Harakatlar",
      width: "130px",
      selector: (row) => (
        <div>
          <Button id={row.id} onClick={handleShow} className="success-btn">
            <i className="bi bi-pencil-fill" />
          </Button>{" "}
          <ConfirmModal />
        </div>
      ),
    },
  ];

  const notify = () => {
    toast.success("Malumot saqlandi");
  };

  const dedaultShow = () => {
    dispatch(modalToggle(true));
    // dispatch(defaultUse());
  };
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
        <DataTables columns={columns} data={contracts} />
        <UserActions />
        <button onClick={notify}>boss</button>
      </div>
    </div>
  );
}

export default ContractTypes;
