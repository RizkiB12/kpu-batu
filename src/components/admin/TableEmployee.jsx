import { Table, Modal, Form, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import ModalEmployee from "./Employee/ModalEmployee";
import { ColumnEmployee } from "./Employee/Tabel";

function TableEmployee() {
    const { authUser } = useSelector(state => state.authUser)

    const [employeeData, setEmployeeData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchEmployee = () => {
            setLoading(true)
            axios.get(`${process.env.REACT_APP_API_URL}employee?page=1&limit=5`, {
                headers: { 'Authorization': 'Bearer ' + authUser.access_token }
            })
                .then((res) => {
                    console.log(res);
                    setEmployeeData(res.data.data.employees);
                    setLoading(false)
                })
        }
        fetchEmployee();
    }, [authUser.access_token])



    const Delete = (record) => {
        console.log("run function delete", record);
        const data = {
            user_id : record.id
        }
        Modal.confirm({
            title: "Are you sure, you want to delete this employee record?",
            onOk: () => {
                console.log(record);
                const loading = message.loading('Loading...')
                axios.delete(`${process.env.REACT_APP_API_URL}employee/delete`, {
                    headers: {
                        'Authorization': 'Bearer ' + authUser.access_token
                    }, data
                    
                }
                ).then(res => {
                    console.log(res.data);
                    setVisible(false)
                    setEmployeeData((pre) => {
                         return pre.filter((employee) => employee.id !== record.id);
                    }).finally(() => {
                        loading()
                    });
                })
            },
        });
    };

    const Edit = (record) => {
        console.log(record)
        setTimeout(() => {
            form.resetFields()
        }, 100);
        setEdit(record)
        setVisible(true);
    };

    const resetEditing = () => {
        setVisible(false);
        setEdit({});
    };

    console.log(employeeData);

    const onFinishUpdate = (values) => {
        console.log('this value will be updated', values)
        axios.post(`${process.env.REACT_APP_API_URL}employee/update`, values, {
            headers: {
                'Authorization': 'Bearer ' + authUser.access_token
            }
        }).then(res => {
            console.log(res.data);
            setVisible(false)
            setEmployeeData(employeeData.map(item => {
                if (item.id === values.user_id) {
                    console.log('run update')
                    return {
                        ...item,
                            name: values.name,
                            email: values.email,
                            password: values.password,
                            role: values.role
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
             dataSource={employeeData}
             columns={ColumnEmployee({Delete, Edit, authUser})}
             >
            </Table>
            {/* menambahkan pada employee adhoc */}
            <ModalEmployee
                onFinishUpdate={onFinishUpdate}
                form={form}
                employee={edit}
                visible={visible}
                setData={setEmployeeData}
                resetEditing={resetEditing}
                setVisible={setVisible}
            >
            </ModalEmployee>

        </>
    );
}

export default TableEmployee;