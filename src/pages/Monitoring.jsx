import React, { useEffect } from "react";
import DataTables from "../components/table/dataTable";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userModalToggle } from "../store/reduser/menu/menuSlice";
import { defaultUser, selectedUser } from "../store/reduser/user/userSlice";
import { useCookies } from "react-cookie";
import createExcel from "../components/CreateExcell/createExcell";
import getAsync from "../store/reduser/monitoring/actions/getData";
import getAsync1 from "../store/reduser/contract/actions/getData";
import PaidContractModal from "../components/Modalls/paidContractModal";

// import ConfirmModal from "../Modalls/ConfirmModal";

function Monitoring() {
    const dispatch = useDispatch();
    const [cookie] = useCookies();
    const data = useSelector((store) => store.monitoring);
    const users = useSelector((store) => store.contracts);

    useEffect(() => {
        dispatch(getAsync({ token: cookie.userToken, path: "paid-contract-fees?populate=*" }));
        dispatch(getAsync1({ token: cookie.userToken, path: "contracts?populate=*" }));
    }, []);

    // const handleShow = (e) => {
    //     dispatch(
    //         selectedUser(data.body.data.find((user) => user.id == e.currentTarget.id))
    //     );
    //     dispatch(userModalToggle(true));
    // };

    const makeExcell = () => {
        createExcel(data.body.data);
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
            selector: (row) => `${row?.attributes?.student.data?.attributes?.First_name} ${row?.attributes?.student.data?.attributes?.Last_name}`,
            sortable: true,
            width: "300px",
        },
        {
            name: "Chek raqami",
            selector: (row) => row.attributes.check_number,
        },
        {
            name: "To'lagan summasi",
            selector: (row) => row.attributes.summa,
        },
        {
            name: "To'lagan sanasi",
            selector: (row) => row.attributes.payed_date,
        },


        {
            name: "Harakatlar",
            width: "130px",
            selector: (row) => (
                <div>
                    <Button id={row.id} className="success-btn">
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
            <h2 className="border-bottom mb-2">Talabalar ro'yaxti</h2>
            <div className="actions mb-2 d-flex justify-content-end">
                <Button className="peremium-btn me-2" onClick={defaultShow}>
                    <i style={{ color: "" }} className="bi bi-person-plus-fill"></i>{" "}
                    Foydalanuvchi qo'shish
                </Button>
                <Button className="peremium-btn" onClick={makeExcell}>
                    <i style={{ color: "" }} className="bi bi-filetype-xlsx"></i> Excelda
                    yuklash
                </Button>
            </div>
            <DataTables columns={columns} data={data.body.data} />
            <PaidContractModal users={users} />
        </div>
    );
}

export default Monitoring;
