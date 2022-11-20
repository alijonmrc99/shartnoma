import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import DataTables from "../table/dataTable";
import ContractModal from "../Modalls/conractModal";
import { contractModalToggle } from "../../store/reduser/menu/menuSlice";
import { defaultContr } from "../../store/reduser/contract/contractSlice";
import axios from "../../components/axios/Axios";

function NotReceive() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const initialData = useSelector((store) => store.contracts);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/olmaganlar", {
        headers: {
          Authorization: "Bearer " + cookie.userToken,
        },
      })
      .then((res) => {
        setData(res.data.filter((item) => item.contract_id === null));
      })
      .catch((error) => error.response.statusText);
  }, [initialData]);

  const handleShow = (id) => {
    dispatch(defaultContr(id));
    dispatch(contractModalToggle(true));
  };

  const columns = [
    {
      name: "FISH",
      selector: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
      name: "Passport raqami",
      selector: (row) => row?.passport,
    },
    {
      name: "Harakatlar",
      width: "180px",
      selector: (row) => (
        <>
          <Button
            id={row.id}
            onClick={() => handleShow(row.id)}
            className="success-btn me-2"
          >
            <i className="bi bi-person-plus-fill"></i>
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="mt-3">
      <h3 className="border-bottom mb-2">Shartnoma olmaganlar</h3>
      <DataTables columns={columns} data={data} />
      <ContractModal />
    </div>
  );
}

export default NotReceive;
