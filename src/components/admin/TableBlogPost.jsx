import { Table, Modal, Form  } from "antd";
import { useState } from "react";
import ModalBlogPost from "./BlogPost/ModalBlogPost";
import { ColumnBlogPost } from "./BlogPost/TabelBlog";

function TableBlogPost () {


    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);
    const [form] = Form.useForm();

    const Delete = (record) => {
        console.log(record);
        Modal.confirm({
            title: "Are you sure you want to delete this",
            // onOk: () => {
            //     setData((pre) => {
            //         return pre.filter((emp) => emp.user_id !== record.user_id);
            //     });
            // },
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

    return (
        <>
            <Table columns={ColumnBlogPost({ Delete, Edit})} dataSource={data} pagination={{ pageSize: 8, showSizeChanger: true }}></Table>
            <ModalBlogPost
                // onFInishUpdate={onFinishUpdate}
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