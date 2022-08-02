import React from "react";
import LayoutAdmin from "../components/admin/LayoutAdmin";
import { Add } from "../components/admin/Add";

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
        </LayoutAdmin>
    );
}

export default addData;

