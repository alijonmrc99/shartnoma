import React from "react";
import DataTables from "../components/table/dataTable";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import zipcelx from "zipcelx";
import ToastMsg from "../components/toasts/ToastMsg";
import UserActions from "../components/Modalls/Modal";
import { useDispatch } from "react-redux";
import { modalToggle } from "../store/reduser/menu/menuSlice";
import data from "../store/reduser/data.json";
import { defaultUser } from "../store/reduser/user/userSlice";

function Students() {
  const dispatch = useDispatch();
  function createExcel() {
    const config = {
      filename: "excel",
      sheet: {
        data: [],
      },
    };
    const header = columns.map((item) => ({
      value: item.name,
      type: typeof item.name,
    }));

    config.sheet.data.push(header);
    data.forEach((item) => {
      const rowOne = [
        {
          value: item.title,
          type: typeof item.title,
        },
        {
          value: item.year,
          type: isNaN(+item.year) ? "string" : "number",
        },
        {
          value: item.someThing,
          type: typeof item.someThing,
        },
      ];
      config.sheet.data.push(rowOne);
    });
    zipcelx(config);
  }
  const columns = [
    {
      name: "Title",
    },
    {
      name: "Year",
    },
    {
      name: "someThing",
    },
    {
      name: "someThing",
    },
  ];

  const notify = () => {
    toast.success("Malumot saqlandi");
  };
  const handleShow = () => {
    dispatch(modalToggle(true));
    dispatch(defaultUser());
  };
  return (
    <div>
      <h2 className="border-bottom mb-2">Talabalar ro'yaxti</h2>
      <div className="actions mb-2 d-flex justify-content-end">
        <Button className="peremium-btn me-2" onClick={handleShow}>
          <i style={{ color: "" }} className="bi bi-person-plus-fill"></i>{" "}
          Foyfalanuvchi qo'shish
        </Button>
        <Button className="peremium-btn" onClick={createExcel}>
          <i style={{ color: "" }} className="bi bi-filetype-xlsx"></i> Excelda
          yuklash
        </Button>
      </div>
      <ToastMsg />
      <DataTables />
      <UserActions />
      <button onClick={notify}>boss</button>
    </div>
  );
}

export default Students;
