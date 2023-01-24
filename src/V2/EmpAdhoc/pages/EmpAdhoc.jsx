import { Button, Divider, Form, message, Modal, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ColumnEmpAdhoc } from '../utils/ColumnEmpAdhoc'
import ModalViewEmpAdhoc from '../components/ModalViewEmpAdhoc'
import ModalViewTextEmpAdhoc from '../components/ModalViewTextEmpAdhoc'
import { useNavigate } from 'react-router-dom'

const EmpAdhoc = () => {
    moment().locale('id')
    const { authUser } = useSelector(state => state.authUser)
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [openCell, setModalCell] = useState(false)
    const [openEditText, setOpenEditText] = useState(false)
    const [dataCell, setDataCell] = useState('')

    const breadcumb = [
        {
            name: 'Employees Adhoc',
            link: '/employeeadhoc',
        },
    ];

    useEffect(() => {
        const fetchEmp = () => {
            setLoading(true)
            axios.get(`${process.env.REACT_APP_API_URL}emp-adhoc?page=1&limit=10`, {
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

    const handleDelete = (record) => {
        console.log(record);
        console.log(authUser);
        const data = {
            user_id: record.user_id
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
                    message.success('Sukses menghapus data employee adhoc')
                    setData((pre) => {
                        return pre.filter((emp) => emp.user_id !== record.user_id);
                    });
                }).catch(err => {
                    message.error('Gagal menghapus data employee adhoc')
                })
                    .finally(() => {
                        loading();
                    })

            },
        });
    };

    const onFinishUpdate = (values) => {
        console.log('this value will be updated', values)
        const loading = message.loading('Loading...')
        setLoading(true)
        axios.post(`${process.env.REACT_APP_API_URL}emp-adhoc/update`, values, {
            headers: {
                'Authorization': 'Bearer ' + authUser.access_token
            }
        }).then(res => {
            console.log(res.data);
            message.success('Sukses mengubah data employee adhoc')
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
        }).catch(err => {
            message.error('Gagal mengubah data employee adhoc')
        }).finally(() => {
            setLoading(false)
            loading()
        })
    }

    const handleOpenEditing = (record) => {
        setTimeout(() => {
            form.resetFields()
        }, 100);
        setDataCell(record)
        setOpenEditText(true);
    }

    const handleCancelEditing = () => {
        setOpenEditText(false);
        setDataCell('')
    }

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type='primary' onClick={() => navigate('/adddata')}>Tambah Employee Adhoc</Button>
            <Divider />
            <Table
                loading={loading}
                dataSource={data}
                columns={ColumnEmpAdhoc({
                    authUser,
                    handleDelete,
                    setModalCell,
                    setDataCell,
                    handleOpenEditing,
                })}
                scroll={{ x: 1300 }}
                pagination={{ pageSize: 8, showSizeChanger: true }}
                bordered
            />
            <ModalViewEmpAdhoc
                openCell={openCell}
                setModalCell={setModalCell}
                dataCell={dataCell}
            />
            <ModalViewTextEmpAdhoc
                onFinishUpdate={onFinishUpdate}
                form={form}
                visible={openEditText}
                edit={dataCell}
                setData={setData}
                handleCancelEditing={handleCancelEditing}
                loading={loading}
            />
        </LayoutAdmin>
    )
}

export default EmpAdhoc