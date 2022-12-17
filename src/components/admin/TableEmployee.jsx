import { Table, Modal, Form } from "antd";
import { useState } from "react";
import { useSelector } from 'react-redux';
import ModalEmployee from "./Employee/ModalEmployee";
import { ColumnEmployee } from "./Employee/Tabel";

function TableEmployee() {
    const { authUser } = useSelector(state => state.authUser)
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);
    const [form] = Form.useForm();
    // const [dataSource, setDataSource] = useState([
    //     {
    //         id: 1,
    //         productimage: "https://joeschmoe.io/api/v1/random",
    //         nama: "Pelangi dimatamu",
    //         email: "lorem ipsum dolor sit amet amet amet amet",
    //         passsword: "05/09/2019, 15:53:32",
    //     },
    //     {
    //         id: 2,
    //         productimage: "https://joeschmoe.io/api/v1/random",
    //         nama: "David",
    //         email: "david@gmail.com",
    //         address: "David Address",
    //     },
    //     {
    //         id: 3,
    //         productimage: "https://joeschmoe.io/api/v1/random",
    //         nama: "James",
    //         email: "james@gmail.com",
    //         address: "James Address",
    //     },
    //     {
    //         id: 4,
    //         productimage: "https://joeschmoe.io/api/v1/random",
    //         nama: "Sam",
    //         email: "sam@gmail.com",
    //         address: "Sam Address",
    //     },
    // ]);

    // const props = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //         authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //         if (info.file.status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // };

    const Delete = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this employee record?",
            okText: "Yes",
            okType: "danger",
            // onOk: () => {
            //     setDataSource((pre) => {
            //         return pre.filter((employee) => employee.id !== record.id);
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

    const ResetEditing = () => {
        setVisible(false);
        setEdit({});
    };

    return (
        <div className="App">
            <Table columns={authUser.role === "user" ? ColumnEmployee.filter(col => col.key !== "6") : ColumnEmployee ([Delete, Edit])} dataSource={data}></Table>
            {/* menambahkan pada employee adhoc */}
            <ModalEmployee
                title="Edit Employee"
                form={form}
                edit={edit}
                visible={visible}
                setData={setData}
                resetEditing={ResetEditing}
                setVisible={setVisible}
                onCancel={() => {
                    ResetEditing();
                }}
                // onOk={() => {
                //     setDataSource((pre) => {
                //         return pre.map((employee) => {
                //             if (employee.id === editingEmployee.id) {
                //                 return editingEmployee;
                //             } else {
                //                 return employee;
                //             }
                //         });
                //     });
                //     resetEditing();
                // }}
            >
            </ModalEmployee>

        </div>
    );
}

export default TableEmployee;