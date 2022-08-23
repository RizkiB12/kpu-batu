import React from "react";
import LayoutAdmin from "../components/admin/LayoutAdmin";
import { Add } from "../components/admin/Add";
import Backtop from "../components/admin/BackTop";

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

