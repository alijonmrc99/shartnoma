import React, { useEffect } from "react";
import DataTables from "../components/table/dataTable";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userModalToggle } from "../store/reduser/menu/menuSlice";
import { defaultUser } from "../store/reduser/user/userSlice";
import { useCookies } from "react-cookie";
import createExcel from "../components/CreateExcell/createExcell";
import getAsync from "../store/reduser/PayedSlice/actions/getData";
import getAsync1 from "../store/reduser/contract/actions/getData";
import PaidContractModal from "../components/Modalls/paidContractModal";
import { useParams } from "react-router-dom";
import { useState } from "react";

// import ConfirmModal from "../Modalls/ConfirmModal";

function Monitoring() {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const data = useSelector((store) => store.payedStudets);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(
      getAsync({
        token: cookie.userToken,
        path: `/paid-contract-fees?filters[student][id][$eq]=${studentId}&populate=*`,
      })
    );
  }, [dispatch, cookie.userToken]);
  let summ = 0;
  useEffect(() => {
    data?.body?.data?.forEach((item) => {
      summ += +item.attributes.summa;
      setTotal(summ);
    });
    // return setTotal(0);
  }, []);

  const makeExcell = () => {
    createExcel(data.body.data);
  };

  const columns = [
    {
      name: "Chek raqami",
      selector: (row) => row.attributes.check_number,
    },
    {
      name: "Summasi",
      selector: (row) => row.attributes.summa,
    },
    {
      name: "Izoh",
      selector: (row) => row.attributes.comment,
    },
    {
      name: "Harakatlar",
      width: "130px",
      selector: (row) => (
        <div>
          <Button id={row.student_id} className="success-btn">
            <i className="bi bi-eye-fill" />
          </Button>
        </div>
      ),
    },
  ];

  const defaultShow = () => {
    dispatch(userModalToggle(true));
    dispatch(defaultUser());
  };

  return (
    <div>
      <h2 className="border-bottom mb-2">To'lovlar ro'yaxti</h2>
      <div className="actions mb-2 d-flex justify-content-end">
        <Button className="peremium-btn me-2" onClick={defaultShow}>
          <i style={{ color: "" }} className="bi bi-person-plus-fill"></i>{" "}
          To'lov qo'shish
        </Button>
        <Button className="peremium-btn" onClick={makeExcell}>
          <i style={{ color: "" }} className="bi bi-filetype-xlsx"></i> Excelda
          yuklash
        </Button>
      </div>
      <div>
        <h4>
          {/* {data.body.length !==
            0`${data?.body?.data[0]?.attributes?.student?.data?.attributes?.First_name} ning to'lovlari haqida ma'lumot`} */}
        </h4>
      </div>
      <div>Jami to'lagan: {summ}</div>
      <DataTables columns={columns} data={data?.body?.data} />
      {/* <PaidContractModal /> */}
    </div>
  );
}

export default Monitoring;
