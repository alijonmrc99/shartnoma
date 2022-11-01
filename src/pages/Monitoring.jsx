import React, { useEffect } from "react";
import DataTables from "../components/table/dataTable";
import { Button } from "react-bootstrap";
import zipcelx from "zipcelx";
import ToastMsg from "../components/toasts/ToastMsg";
import UserActions from "../components/Modalls/userModal";
import { useDispatch, useSelector } from "react-redux";
import { userModalToggle } from "../store/reduser/menu/menuSlice";
import { defaultUser, selectedUser } from "../store/reduser/user/userSlice";
import ConfirmModal from "../components/Modalls/ConfirmModal";
import { useCookies } from "react-cookie";
import createExcel from "../components/CreateExcell/createExcell";
import getAsync from "../store/reduser/monitoring/actions/getData";

// import ConfirmModal from "../Modalls/ConfirmModal";

function Monitoring() {
    const dispatch = useDispatch();
    const [cookie] = useCookies();
    const data = useSelector((store) => store.monitoring);

    useEffect(() => {
        dispatch(getAsync({ token: cookie.userToken, path: "paid-contract-fees?populate=*" }));
    }, []);

    const handleShow = (e) => {
        dispatch(
            selectedUser(data.body.data.find((user) => user.id == e.currentTarget.id))
        );
        dispatch(userModalToggle(true));
    };

    const makeExcell = () => {
        createExcel(data.body.data);
    };

    const columns = [
        {
            name: "#",
            selector: (row) => row.id,
            sortable: true,
            width: "3rem",
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

        // {
        //     name: "Viloyati",
        //     selector: (row) =>
        //         regions.find((item) => item.id == row.attributes.region)?.name,
        // },
        // {
        //     name: "Tumani",
        //     selector: (row) =>
        //         district.find((item) => item.id == row.attributes.district)?.name,
        // },

        {
            name: "Harakatlar",
            width: "130px",
            selector: (row) => (
                <div>
                    <Button id={row.id} onClick={handleShow} className="success-btn">
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
            <ToastMsg />
            <DataTables columns={columns} data={data.body.data} />
            <UserActions />
        </div>
    );
}

export default Monitoring;
