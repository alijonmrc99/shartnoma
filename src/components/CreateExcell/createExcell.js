import zipcelx from "zipcelx";

function createExcel(data) {
  const config = {
    filename: "excel",
    sheet: {
      data: [],
    },
  };
  const header = [
    {
      value: "Ismi",
      type: "string",
    },
    {
      value: "Familyasi",
      type: "string",
    },
    {
      value: "Otasinging ismi",
      type: "string",
    },
    {
      value: "Passport raqami",
      type: "string",
    },
    {
      value: "Telefon raqami",
      type: "string",
    },
    {
      value: "Viloyati",
      type: "string",
    },
    {
      value: "Tumani",
      type: "string",
    },
  ];

  config.sheet.data.push(header);
  data.forEach((item) => {
    const rowOne = [
      {
        value: item.attributes.First_name,
        type: typeof item.attributes.First_name,
      },
      {
        value: item.attributes.Last_name,
        type: typeof item.attributes.Last_name,
      },
      {
        value: item.attributes.Fathers_name,
        type: typeof item.attributes.Fathers_name,
      },
      {
        value: item.attributes.phone,
        type: typeof item.attributes.phone,
      },
      {
        value: item.attributes.passport,
        type: typeof item.attributes.passport,
      },
      {
        value: item.attributes.region,
        type: typeof item.attributes.region,
      },
      {
        value: item.attributes.district,
        type: typeof item.attributes.district,
      },
    ];
    config.sheet.data.push(rowOne);
  });

  zipcelx(config);
}

export default createExcel;
