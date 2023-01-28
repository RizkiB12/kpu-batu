import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row } from "antd";


export const ColumnEmployee = ({ Delete, Edit}) => 
[
    {
        key: "name",
        title: "Name",
        render: (item) => item.name,
        sorter: (a, b) => a.id > b.id,
    },
    {
        key: "email",
        title: "Email",
        render: (item) => item.email,
    },
    
    {
        key: "role",
        title: "Role",
        render: (item) => item.role
    },

    {
        key: "actions",
        title: "Actions",
        render: (record) => {
            return (
                <>
                    <Row justify="space-evenly">
                    <EditOutlined
                        onClick={() => {
                            console.log('clicked');
                            Edit(record);
                        }}
                    />
                    <DeleteOutlined
                        onClick={() => {
                            Delete(record);
                        }}
                        style={{ color: "red", marginLeft: 12 }}
                    />
                    </Row>
                </>
            );
        },
    },
]