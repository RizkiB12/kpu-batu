import { Row } from 'antd'
import React from 'react'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ActionEmpAdhoc = ({ handleOpenEditing, setDataCell, Delete, record }) => {
    return (
        <Row justify="space-evenly">
            <EditOutlined
                style={{ color: "black", fontSize: "14px" }}
                onClick={() => handleOpenEditing(record)}
            />
            <DeleteOutlined
                style={{ color: "red", fontSize: "14px" }}
                onClick={() => Delete(record)}
            />
        </Row>
    )
}

export default ActionEmpAdhoc