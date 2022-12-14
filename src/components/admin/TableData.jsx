import React, { useState } from "react";
import { Table, Modal, Form, } from "antd";
import Modals from "./EmployeeAdhoc/Modals";
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
    const [form] = Form.useForm();

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
        setTimeout(() => {
            form.resetFields()
        }, 100);
        setEdit(record)
        setVisible(true);
    };

    const ResetEditing = () => {
        setVisible(false);
        setEdit({});
    };

    console.log(data)

    const onFinishUpdate = (values) => {
        console.log('this value will be updated', values)
        axios.post(`${process.env.REACT_APP_API_URL}emp-adhoc/update`, values, {
            headers: {
                'Authorization': 'Bearer ' + authUser.access_token
            }
        }).then(res => {
            console.log(res.data);
        })
        setData(data.map(item => {
            if (item.user_id === values.user_id) {
                console.log('run update')
                return {
                    ...item,
                    dob: moment(values.dob).format('YYYY-MM-DD'),
                    dop: values.dop,
                    alamat: values.alamat,
                    no_hp: `0${values.no_hp}`,
                    kes: values.kes,
                    ket: values.ket,
                    npwp: values.npwp,
                    agama: values.agama,
                    pendidikan_terakhir: values.pendidikan_terakhir,
                    user: {
                        ...item.user,
                        name: values.name
                    }
                }
            } else {
                return item
            }
        }))
    }

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
                onFinishUpdate={onFinishUpdate}
                form={form}
                visible={visible}
                edit={edit}
                setData={setData}
                ResetEditing={ResetEditing}
                setVisible={setVisible}
            />
        </>
    );
};


