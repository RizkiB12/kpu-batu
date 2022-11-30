import React, { useState } from "react";
import { Table, Modal, } from "antd";
import Modals from "./Modals";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import 'moment/locale/id';
import { ColumnEmpAdhoc } from "./EmployeeAdhoc/TableMeta";

export const TableData = () => {
    moment().locale('id')
    const { authUser } = useSelector(state => state.authUser)

    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        const fetchEmp = () => {
            axios.get(`${process.env.REACT_APP_API_URL}emp-adhoc`, {
                headers: { 'Authorization': 'Bearer ' + authUser.access_token }
            })
                .then((res) => {
                    setData(res.data.empAdhoc);
                })
        }
        fetchEmp();
    }, [authUser.access_token])

    const Delete = (record) => {
        console.log(record);
        Modal.confirm({
            title: "Are you sure you want to delete this",
            onOk: () => {
                setData((pre) => {
                    return pre.filter((emp) => emp.user_id !== record.user_id);
                });
            },
        });
    };

    const Edit = (record) => {
        console.log(record);
        setVisible(true);
        setEdit({ ...record });
    };

    const ResetEditing = () => {
        setVisible(false);
        setEdit(true);
    };
    return (
        <>
            <Table
                dataSource={data}
                columns={ColumnEmpAdhoc({ Delete, Edit, authUser })}
                scroll={{ x: 1300 }}
                pagination={{ pageSize: 8, showSizeChanger: true }}
                bordered
            />
            <Modals
                visible={visible}
                edit={edit}
                setEdit={setEdit}
                setData={setData}
                ResetEditing={ResetEditing}
                setVisible={setVisible}
            />
        </>
    );
};


