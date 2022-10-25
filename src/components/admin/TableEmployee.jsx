import { Table, Modal, Input, Form } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function TableEmployee() {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);
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
            name: "James",
            email: "james@gmail.com",
            address: "James Address",
        },
        {
            id: 4,
            productimage: "https://joeschmoe.io/api/v1/random",
            name: "Sam",
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
            dataIndex: "imageURL",
            render: (text, record) => {
                return (
                    <div>
                        <img src={record.productimage} />
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
            key: "5",
            title: "Password",
            dataIndex: "password",
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
            <Table columns={columns} dataSource={dataSource}></Table>
            <Modal
                title="Edit Employee"
                visible={isEditing}
                okText="Save"
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
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                >
                    <Form.Item
                        label="Nama"
                    >
                        <Input
                            value={editingEmployee?.nama}
                            onChange={(e) => {
                                setEditingEmployee((pre) => {
                                    return { ...pre, nama: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                    >
                        <Input
                            value={editingEmployee?.email}
                            onChange={(e) => {
                                setEditingEmployee((pre) => {
                                    return { ...pre, email: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                    >
                        <Input
                            value={editingEmployee?.password}
                            onChange={(e) => {
                                setEditingEmployee((pre) => {
                                    return { ...pre, password: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    );
}

export default TableEmployee;