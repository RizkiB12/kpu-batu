import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


export const ColumnEmployee = ({ Delete, Edit}) => 
[
    {
        key: "name",
        title: "Nama",
        dataIndex: "name",
    },
    {
        key: "email",
        title: "Email",
        dataIndex: "email",
    },
    {
        key: "actions",
        title: "Actions",
        render: (record) => {
            return (
                <>
                    <EditOutlined
                        onClick={() => {
                            Edit(record);
                        }}
                    />
                    <DeleteOutlined
                        onClick={() => {
                            Delete(record);
                        }}
                        style={{ color: "red", marginLeft: 12 }}
                    />
                </>
            );
        },
    },
]