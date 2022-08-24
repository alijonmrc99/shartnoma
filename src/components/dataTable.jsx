import { Button } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import zipcelx from "zipcelx";

export default function DataTables() {
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
    console.log(config);
    zipcelx(config);
  }
  function handleButtonClick() {
    console.log("console");
  }
  const handleChange = (item) => {
    console.log(item);
  };
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },

    {
      name: "someThing",
      selector: (row) => row.someThing,
    },
    {
      name: "someThing",
      selector: () => <Button onClick={handleButtonClick}>Action</Button>,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: 100,
      someThing: "198asdfasdf8",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "350",
      someThing: "<input type='text'>",
    },
    {
      id: 3,
      title: "Ghostbusters",
      year: "600",
      someThing: "<input type='text'>",
    },
    {
      id: 4,
      title: "Ghostbusters",
      year: "600",
      someThing: "<input type='text'>",
    },
    {
      id: 5,
      title: "Ghostbusters",
      year: "600",
      someThing: "<input type='text'>",
    },
  ];
  return (
    <>
      <Button onClick={createExcel}>asdfasdf</Button>
      <DataTable
        columns={columns}
        fixedHeader
        fixedHeaderScrollHeight="110vh"
        data={data}
        // selectableRows
        onSelectedRowsChange={handleChange}
        //   conditionalRowStyles={conditionalRowStyles}
      />
    </>
  );
}
