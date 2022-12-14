import React from "react";
import LayoutAdmin from "../components/admin/LayoutAdmin";
import { Add } from "../components/admin/EmployeeAdhoc/Add";
import Backtop from "../components/admin/EmployeeAdhoc/BackTop";

const addData = () => {
    const breadcumb = [
        {
            name: "Add Data",
            link: "/adddata",
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Add />
            <Backtop />
        </LayoutAdmin>
    );
}

export default addData;

