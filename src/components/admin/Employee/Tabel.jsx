import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row } from "antd";


export const ColumnEmployee = ({ Delete, Edit}) => 
[
    {
        key: "user.name",
        title: "Name",
        render: (item) => item.user.name,
        sorter: (a, b) => a.user_id > b.user_id,
    },
    {
        key: "user.email",
        title: "Email",
        render: (item) => item.user.email,
    },
    
    {
        key: "user.role",
        title: "Role",
        render: (item) => item.user.role
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