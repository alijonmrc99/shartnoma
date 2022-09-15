import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

export default function DataTables({ columns, data }) {
  const dispatch = useDispatch();

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
      />
    </>
  );
}
