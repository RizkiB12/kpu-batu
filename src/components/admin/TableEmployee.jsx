import { Table, Modal, Form, message } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';
import ModalEmployee from "./Employee/ModalEmployee";

function TableEmployee() {
    const { authUser } = useSelector(state => state.authUser)
    const [isEditing, setIsEditing] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            productimage: "https://joeschmoe.io/api/v1/random",
            nama: "Pelangi dimatamu",
            email: "lorem ipsum dolor sit amet amet amet amet",
            passsword: "05/09/2019, 15:53:32",
        },
        {
            id: 2,
            productimage: "https://joeschmoe.io/api/v1/random",
            nama: "David",
            email: "david@gmail.com",
            address: "David Address",
        },
        {
            id: 3,
            productimage: "https://joeschmoe.io/api/v1/random",
            nama: "James",
            email: "james@gmail.com",
            address: "James Address",
        },
        {
            id: 4,
            productimage: "https://joeschmoe.io/api/v1/random",
            nama: "Sam",
            email: "sam@gmail.com",
            address: "Sam Address",
        },
    ]);
    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "Image",
            dataIndex: "productimage",
            render: (text, record) => {
                return (
                    <div>
                        <img src={record.productimage} alt="" />
                    </div>
                );
            },
        },
        {
            key: "3",
            title: "Nama",
            dataIndex: "nama",
        },
        {
            key: "4",
            title: "Email",
            dataIndex: "email",
        },
        {
            key: "6",
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditEmployee(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteEmployee(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const onDeleteEmployee = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this employee record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((employee) => employee.id !== record.id);
                });
            },
        });
    };
    const onEditEmployee = (record) => {
        setIsEditing(true);
        setEditingEmployee({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingEmployee(null);
    };
    return (
        <div className="App">
            <Table columns={authUser.role === "user" ? columns.filter(col => col.key !== "6") : columns} dataSource={dataSource}></Table>
            {/* menambahkan pada employee adhoc */}
            <ModalEmployee
                title="Edit Employee"
                form={form}
                edit={edit}
                visible={visible}
                setData={setData}
                resetEditing={resetEditing}
                setVisible={setVisible}
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    setDataSource((pre) => {
                        return pre.map((employee) => {
                            if (employee.id === editingEmployee.id) {
                                return editingEmployee;
                            } else {
                                return employee;
                            }
                        });
                    });
                    resetEditing();
                }}
            >
            </ModalEmployee>

        </div>
    );
}

export default TableEmployee;