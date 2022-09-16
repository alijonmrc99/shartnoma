import React from "react";
import DataTables from "../components/table/dataTable";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import zipcelx from "zipcelx";
import ToastMsg from "../components/toasts/ToastMsg";
import UserActions from "../components/Modalls/userModal";
import { useDispatch, useSelector } from "react-redux";
import { userModalToggle } from "../store/reduser/menu/menuSlice";
import data from "../store/reduser/data.json";
import { defaultUser, selectedUser } from "../store/reduser/user/userSlice";
import ConfirmModal from "../components/Modalls/ConfirmModal";

// import ConfirmModal from "../Modalls/ConfirmModal";

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

  const regions = useSelector((store) => store.regions);
  const district = useSelector((store) => store.district);
  const handleShow = (e) => {
    dispatch(selectedUser(data.find((user) => user.id == e.currentTarget.id)));

    dispatch(userModalToggle(true));
  };

  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "4rem",
    },
    {
      name: "F.I.SH",
      selector: (row) =>
        row.attributes.First_name +
        " " +
        row.attributes.Last_name +
        " " +
        row.attributes.Fathers_name,
      sortable: true,
      width: "250px",
    },
    {
      name: "Telfon raqami",
      selector: (row) => row.attributes.phone,
    },
    {
      name: "Passport raqami",
      selector: (row) => row.attributes.passport,
    },

    {
      name: "Viloati",
      selector: (row) =>
        regions.find((item) => item.id == row.attributes.region).name,
    },
    {
      name: "Tumani",
      selector: (row) =>
        district.find((item) => item.id == row.attributes.district).name,
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
    dispatch(userModalToggle(true));
    dispatch(defaultUser());
  };
  return (
    <div>
      <h2 className="border-bottom mb-2">Talabalar ro'yaxti</h2>
      <div className="actions mb-2 d-flex justify-content-end">
        <Button className="peremium-btn me-2" onClick={dedaultShow}>
          <i style={{ color: "" }} className="bi bi-person-plus-fill"></i>{" "}
          Foyfalanuvchi qo'shish
        </Button>
        <Button className="peremium-btn" onClick={createExcel}>
          <i style={{ color: "" }} className="bi bi-filetype-xlsx"></i> Excelda
          yuklash
        </Button>
      </div>
      <ToastMsg />
      <DataTables columns={columns} data={data} />
      <UserActions />
      <button onClick={notify}>boss</button>
    </div>
  );
}

export default Students;
