import { Row } from 'antd'
import React from 'react'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ActionEmpAdhoc = ({ handleOpenEditing, setDataCell, handleDelete, record }) => {
    return (
        <Row justify="space-evenly">
            <EditOutlined
                style={{ color: "black", fontSize: "14px" }}
                onClick={() => handleOpenEditing(record)}
            />
            <DeleteOutlined
                style={{ color: "red", fontSize: "14px" }}
                onClick={() => handleDelete(record)}
            />
        </Row>
    )
}

export default ActionEmpAdhoc