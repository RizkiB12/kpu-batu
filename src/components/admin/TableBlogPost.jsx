import { Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function TableBlogPost() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingBlogPost, setEditingBlogPost] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            productimage: "https://joeschmoe.io/api/v1/random",
            judul: "Padamu Negeri",
            deskripsi: "lorem ipsum dolor sit amet amet amet amet",
            tanggal: "05/09/2019, 15:53:32",
        },
        {
            id: 2,
            productimage: "https://joeschmoe.io/api/v1/random",
            judul: "Jiwamu Negeriku",
            deskripsi: "lorem ipsum dolor sit amet amet amet amet",
            tanggal: "05/09/2019, 15:53:32",
        },
        {
            id: 3,
            productimage: "https://joeschmoe.io/api/v1/random",
            judul: "Padamu Negeri",
            deskripsi: "lorem ipsum dolor sit amet amet amet amet",
            tanggal: "05/09/2019, 15:53:32",
        },
        {
            id: 4,
            productimage: "https://joeschmoe.io/api/v1/random",
            judul: "Jiwa Raga Kami",
            deskripsi: "lorem ipsum dolor sit amet amet amet amet",
            tanggal: "05/09/2019, 15:53:32",
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
                                onEditBlogPost(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteBlogPost(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];




    const onDeleteBlogPost = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this Blog Post record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((blog) => blog.id !== record.id);
                });
            },
        });
    };
    const onEditBlogPost = (record) => {
        setIsEditing(true);
        setEditingBlogPost({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingBlogPost(null);
    };
    return (
        <div className="App">
            <Table columns={columns} dataSource={dataSource}></Table>
            <Modal
                title="Edit Blog Post"
                visible={isEditing}
                okText="Save"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    setDataSource((pre) => {
                        return pre.map((blog) => {
                            if (blog.id === editingBlogPost.id) {
                                return editingBlogPost;
                            } else {
                                return blog;
                            }
                        });
                    });
                    resetEditing();
                }}
            >
                <Input
                    value={editingBlogPost?.judul}
                    onChange={(e) => {
                        setEditingBlogPost((pre) => {
                            return { ...pre, judul: e.target.value };
                        });
                    }}
                />
                <Input
                    value={editingBlogPost?.deskripsi}
                    onChange={(e) => {
                        setEditingBlogPost((pre) => {
                            return { ...pre, deskripsi: e.target.value };
                        });
                    }}
                />
                <Input
                    value={editingBlogPost?.tanggal}
                    onChange={(e) => {
                        setEditingBlogPost((pre) => {
                            return { ...pre, tanggal: e.target.value };
                        });
                    }}
                />
            </Modal>
        </div>
    );
}

export default TableBlogPost;