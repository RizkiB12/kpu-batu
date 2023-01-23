import React, { useState } from "react";
import { Table, Modal, Form, message, } from "antd";
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEmp = () => {
            setLoading(true)
            axios.get(`${process.env.REACT_APP_API_URL}emp-adhoc?page=1&limit=4`, {
                headers: { 'Authorization': 'Bearer ' + authUser.access_token }
            })
                .then((res) => {
                    console.log(res);
                    setData(res.data.data);
                    setLoading(false)
                })
        }
        fetchEmp();
    }, [authUser.access_token])

    const Delete = (record) => {
        console.log(record);
        console.log(authUser);
        const data = {
            user_id : record.user_id
        } 
        Modal.confirm({
            title: "Are you sure you want to delete this",
            onOk: () => {
                const loading = message.loading('Loading...')
                axios.delete(`${process.env.REACT_APP_API_URL}emp-adhoc/delete`, {
                    headers: {
                        'Authorization': 'Bearer ' + authUser.access_token
                    }, data
                    
                }
                ).then(res => {
                    console.log(res.data);
                    setVisible(false)
                    setData((pre) => {
                        return pre.filter((emp) => emp.user_id !== record.user_id);
                    });
                }).finally(() => {
                    loading();
                })
               
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
            setVisible(false)
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
        })
        
    }

    return (
        <>
            <Table
                loading={loading}
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
                handleDelete={Delete}
            />
        </>
    );
};


