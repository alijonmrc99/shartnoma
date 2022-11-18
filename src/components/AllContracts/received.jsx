import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../Modalls/ConfirmModal";
import DataTables from "../table/dataTable";
// import { contractModalToggle } from "../store/reduser/menu/menuSlice";
import ContractModal from "../Modalls/conractModal";
import getAsync from "../../store/reduser/contract/actions/getData";
import { contractModalToggle } from "../../store/reduser/menu/menuSlice";
import { selectedContr } from "../../store/reduser/contract/contractSlice";
import axios from "axios";
import { PDF_API } from "../../store/reduser/initailState";
function Receive() {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const contracts = useSelector((store) => store.contracts);

  useEffect(() => {
    dispatch(
      getAsync({ token: cookie.userToken, path: "contracts?populate=*" })
    );
  }, [cookie.userToken, dispatch]);
  // Tugma bosilganda shu tugma qaysi usergishli bo'lsa shu user ma'lumotlarini qaytarish
  function selectItem(id) {
    return contracts.body.data.find((item) => item.id === +id);
  }

  // pdf yaratish uchun keraklu malumotlarni yig'ish
  function makePdf(e) {
    const item = selectItem(e.currentTarget.id);
    const pdfData = {
      name: item.id,
      contract_number: item.attributes.contract_number,
      beginning_date: item.attributes.beginning_date,
      due_date: item.attributes.due_date,
      contract_type: item.attributes?.contract_type.data?.id,
      direction: item.attributes?.contract_type.data?.attributes,
      user: item.attributes.student.data.attributes,
    };

    axios
      .post(PDF_API, {
        body: pdfData,
      })
      .then((res) => downloadPDF(res.data, item.id));
  }

  // pdf yuklab olish funksiyasi
  function downloadPDF(pdf, id) {
    const linkSource = `data:application/pdf;base64,${pdf}`;
    const downloadLink = document.createElement("a");
    const fileName = `sharnoma ${id}`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  // Ma'lumitlarni yangilash tugmasiga userning hozirgi ma'lumotlarini yuborish
  const handleShow = (e) => {
    const item = selectItem(e.currentTarget.id);
    const data = {
      contract_number: item.attributes.contract_number,
      beginning_date: item.attributes.beginning_date,
      due_date: item.attributes.due_date,
      contract_type: item.attributes?.contract_type.data?.id,
      student: item.attributes?.student.data?.id,
      id: item.id,
    };

    dispatch(selectedContr(data));
    dispatch(contractModalToggle(true));
  };

  const columns = [
    {
      name: "FISH",
      selector: (row) =>
        `${row?.attributes?.student.data?.attributes?.First_name} ${row?.attributes?.student.data?.attributes?.Last_name}`,
    },
    {
      name: "Passport raqami",
      selector: (row) => row?.attributes?.student.data?.attributes?.passport,
      // width: "150px",
    },
    {
      name: "Yo'nalishi",
      selector: (row) =>
        row?.attributes?.contract_type.data?.attributes?.direction,
      // width: "180px",
    },
    {
      name: "Boshlanish sanasi",
      selector: (row) => row.attributes.beginning_date,
      sortable: true,
      // width: "150px",
    },
    {
      name: "Tugash sanasi sanasi",
      selector: (row) => row.attributes.due_date,
      sortable: true,
      // width: "150px",
    },
    {
      name: "Harakatlar",
      width: "180px",
      selector: (row) => (
        <>
          <Button id={row.id} onClick={handleShow} className="success-btn me-2">
            <i className="bi bi-pencil-fill" />
          </Button>
          <ConfirmModal id={row.id} path={`contracts/${row.id}`} />
          <Button id={row.id} onClick={makePdf} className="success-btn ms-2">
            <i className="bi bi-download"></i>
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="mt-3">
      <h3 className="border-bottom mb-2">Shartnoma olganlar</h3>
      <DataTables columns={columns} data={contracts.body.data} />
      <ContractModal />
    </div>
  );
}

export default Receive;
