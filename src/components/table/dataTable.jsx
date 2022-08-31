import DataTable from "react-data-table-component";
import { Button } from "react-bootstrap";
import ConfirmModal from "../Modalls/ConfirmModal";
import { useDispatch } from "react-redux";
import { modalToggle } from "../../store/reduser/menu/menuSlice";
import data from "../../store/reduser/data.json";
export default function DataTables() {
  const dispatch = useDispatch();
  const handleShow = (e) => {
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
      name: "F.I.SH",
      selector: (row) =>
        row.first_name + " " + row.last_name + " " + row.middle_name,
      sortable: true,
      width: "250px",
    },
    {
      name: "Telfon raqami",
      selector: (row) => row.phone,
    },
    {
      name: "Passport raqami",
      selector: (row) => row.passport_number,
    },

    {
      name: "Viloati",
      selector: (row) => row.region,
    },
    {
      name: "Tumani",
      selector: (row) => row.district,
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

  const conditionalRowStyles = [
    {
      when: (row) => row.year > 10,
      style: {
        backgroundColor: "#FEDED4",
      },
    },
    {
      when: (row) => row.year > 300,
      style: {
        backgroundColor: "#E2EFFF",
      },
    },
    {
      when: (row) => row.year > 500,
      style: {
        backgroundColor: "#DCEBE6",
      },
    },
  ];

  const customStyles = {
    rows: {
      style: {
        fontSize: "16px",
        color: "#15171A",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        backgroundColor: "#00a65a",
        color: "#f1f1f1",
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    // cells: {
    //   style: {
    //     paddingLeft: "8px", // override the cell padding for data cells
    //     paddingRight: "8px",
    //   },
    // },
  };
  const condition = false;

  return (
    <>
      <DataTable
        columns={columns}
        fixedHeader
        conditionalRowStyles={condition && conditionalRowStyles}
        fixedHeaderScrollHeight="100%"
        data={data}
        customStyles={customStyles}
        // selectableRows
        //   conditionalRowStyles={conditionalRowStyles}
      />
    </>
  );
}
