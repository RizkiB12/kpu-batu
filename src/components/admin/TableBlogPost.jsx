import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function TableBlogPost() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            productimage: "https://joeschmoe.io/api/v1/random",
            judul: "Pelangi dimatamu",
            deskripsi: "lorem ipsum dolor sit amet amet amet amet",
            tanggal: "05/09/2019, 15:53:32",
        },
        {
            id: 2,
            productimage: "https://joeschmoe.io/api/v1/random",
            name: "David",
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
            title: "Judul",
            dataIndex: "judul",
        },
        {
            key: "4",
            title: "Deskripsi",
            width: '40%',
            dataIndex: "deskripsi",
        },
        {
            key: "5",
            title: "Tanggal",
            dataIndex: "tanggal",
        },
        {
            key: "6",
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditStudent(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteStudent(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const onAddStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            name: "Name " + randomNumber,
            email: randomNumber + "@gmail.com",
            address: "Address " + randomNumber,
        };
        setDataSource((pre) => {
            return [...pre, newStudent];
        });
    };
    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this student record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);
                });
            },
        });
    };
    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };
    return (
        <div className="App">
            <header className="App-header">
                <Button onClick={onAddStudent}>Add a new Student</Button>
                <Table columns={columns} dataSource={dataSource}></Table>
                <Modal
                    title="Edit Student"
                    visible={isEditing}
                    okText="Save"
                    onCancel={() => {
                        resetEditing();
                    }}
                    onOk={() => {
                        setDataSource((pre) => {
                            return pre.map((student) => {
                                if (student.id === editingStudent.id) {
                                    return editingStudent;
                                } else {
                                    return student;
                                }
                            });
                        });
                        resetEditing();
                    }}
                >
                    <Input
                        value={editingStudent?.name}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, name: e.target.value };
                            });
                        }}
                    />
                    <Input
                        value={editingStudent?.email}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, email: e.target.value };
                            });
                        }}
                    />
                    <Input
                        value={editingStudent?.address}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, address: e.target.value };
                            });
                        }}
                    />
                </Modal>
            </header>
        </div>
    );
}

export default TableBlogPost;