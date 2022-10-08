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
function Receive() {
    const dispatch = useDispatch();
    const [cookie] = useCookies();
    const contracts = useSelector((store) => store.contracts);

    useEffect(() => {
        dispatch(getAsync({ token: cookie.userToken, path: "contracts?populate=*" }));
    }, []);

    const handleShow = (e) => {

        const item = contracts.body.data.find((item) => item.id == e.currentTarget.id);
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
            selector: (row) => `${row?.attributes?.student.data?.attributes?.First_name} ${row?.attributes?.student.data?.attributes?.Last_name}`,
        },

        {
            name: "Passport raqami",
            selector: (row) => row?.attributes?.student.data?.attributes?.passport,
            // width: "150px",
        },
        {
            name: "Yo'nalishi",
            selector: (row) => row?.attributes?.contract_type.data?.attributes?.direction,
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
        // },
        {
            name: "Harakatlar",
            width: "180px",
            selector: (row) =>

                <>
                    <Button
                        id={row.id}
                        onClick={handleShow}
                        className="success-btn me-2"
                    >
                        <i className="bi bi-pencil-fill" />
                    </Button>
                    <ConfirmModal
                        id={row.id}
                        path={`contracts/${row.id}`}
                    />
                    {/* <CreateQRCode id={row.id} /> */}
                </>

        },
    ];

    return (
        <div className="mt-3">
            <h3 className="border-bottom mb-2">Shartnoma berilgalar</h3>
            <DataTables columns={columns} data={contracts.body.data} />
            <ContractModal />
        </div>
    );
}

export default Receive;
