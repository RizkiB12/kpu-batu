import React from "react";
import LayoutAdmin from "../components/admin/LayoutAdmin";
import Calender from "../components/admin/Calender";

const Schedule = () => {
    const breadcumb = [
        {
            name: "Schedule",
            link: "/schedule",
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Calender />
        </LayoutAdmin>
    );
}

export default Schedule;

