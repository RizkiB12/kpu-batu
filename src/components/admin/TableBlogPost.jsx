import { Table, Modal, Form  } from "antd";
import { useState } from "react";
import ModalBlogPost from "./BlogPost/ModalBlogPost";
import { ColumnBlogPost } from "./BlogPost/TabelBlog";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";


function TableBlogPost () {

    const { authUser } = useSelector(state => state.authUser)

    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchBlog = () => {
            axios.get(`${process.env.REACT_APP_API_URL}news?limit=10&page=1`, {
                headers: { 'Authorization': 'Bearer ' + authUser.access_token }
            })
                .then((res) => {
                    console.log(res);
                    setData(res.data.data);
                })
        }
        fetchBlog();
    }, [authUser.access_token])

    const Delete = (record) => {
        console.log(record);
        const data = {
            id : record.id
        }
        Modal.confirm({
            title: "Are you sure you want to delete this",
            onOk: () => {
                axios.delete(`${process.env.REACT_APP_API_URL}news/delete`, {
                    headers: {
                        'Authorization': 'Bearer ' + authUser.access_token
                    }, data
                }   
                // asking
                ).then(res => {
                    console.log(res.data);
                    setVisible(false)
                    setData((pre) => {
                        return pre.filter((blog) => blog.id !== record.id);
                    });
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
    const resetEditing = () => {
        setVisible(false);
        setEdit({});
    };

    const onFinishUpdate = (values) => {
        console.log('this value will be updated', values)
        axios.post(`${process.env.REACT_APP_API_URL}news/update`, values, {
            headers: {
                'Authorization': 'Bearer ' + authUser.access_token
            }
        }).then(res => {
            console.log(res.data);
            setVisible(false)
            setData(data.map(item => {
                if (item.id === values.id) {
                    console.log('run update')
                    return {
                        ...item,
                        judul: values.title,
                        deskripsi: values.description,
                    }
                } else {
                    return item
                }
            }))
        })
        
    }

    return (
        <>
            <Table columns={ColumnBlogPost({ Delete, Edit, authUser})} dataSource={data} pagination={{ pageSize: 8, showSizeChanger: true }}></Table>
            <ModalBlogPost
                onFInishUpdate={onFinishUpdate}
                form={form}
                visible={visible}
                edit={edit}
                setData={setData}
                resetEditing={resetEditing}
                setVisible={setVisible}
            />
        </>
    );
}


export default TableBlogPost;