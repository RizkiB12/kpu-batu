import React, { useState } from "react";
import { Table, Modal, Empty } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
//import { data } from "./Data";
import Modals from "./Modals";
import axios from "axios";
import { useEffect } from "react";


export const TableData = () => {
    const columns = [
        {
            key: "user_id",
            title: "Name",
            render: item => item.user.name,
            sorter: (a, b) => a.user_id > b.user_id,
            sortDirections: ["descend"],
            fixed: 'left',
            width: 150,
        },
        // {
        //     key: "foto",
        //     title: "Foto",
        //     dataIndex: "foto",
        //     width: 100,
        //     render: (text, record) => {
        //         return (
        //             <div>
        //                 <img src={record.productimage} />
        //             </div>
        //         );
        //     },
        // },
        {
            key: "user_id",
            title: "Tanggal Lahir",
            dataIndex: "dob",
            width: 150,
        },
        {
            key: "user_id",
            title: "Tempat",
            dataIndex: "dop",
            width: 150,
        },
        {
            key: "user_id",
            title: "Alamat",
            dataIndex: "alamat",
            width: 150,

        },
        // {
        //     key: "instagram",
        //     title: "Instagram",
        //     dataIndex: "instagram",
        //     width: 150,
        // },
        // {
        //     key: "facebook",
        //     title: "Facebook",
        //     dataIndex: "facebook",
        //     width: 150,
        // },
        {
            key: "user_id",
            title: "Nomer HP",
            dataIndex: "no_hp",
            width: 150,
        },
        {
            key: "user_id",
            title: "Pendidikan",
            dataIndex: "pendidikan_terakhir",
            width: 150,
        },
        {
            key: "user_id",
            title: "KTP",
            dataIndex: "ktp",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SPSPS",
            dataIndex: "spsp",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SPI",
            dataIndex: "spi",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "STPOL",
            dataIndex: "stpol",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SKES",
            dataIndex: "skes",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "Ijazah",
            dataIndex: "ijazah",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SKCK",
            dataIndex: "skck",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "STSKPU",
            dataIndex: "stskpu",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SBTH",
            dataIndex: "sbth",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "STPP",
            dataIndex: "stpp",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SDOM",
            dataIndex: "sdom",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "KK",
            dataIndex: "kk",
            width: 200,
            render: () => {
                return (
                    <div>
                        <Empty />
                    </div>
                );
            },
        },
        {
            key: "action",
            title: "Actions",
            width: 100,
            fixed: 'right',
            render: (record) => {

                return (
                    <>
                        <div className="flex">
                            <EditOutlined
                                style={{ color: "black" }}
                                onClick={() => Edit(record)}
                            />
                            <DeleteOutlined
                                style={{ color: "red" }}
                                onClick={() => Delete(record)}
                            />
                        </div>
                    </>
                );
            },
        },
    ];

    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        const fetchEmp = () => {
            axios.get("http://127.0.0.1:5000/api/v1/emp-adhoc")
                .then((res) => {
                    console.log(res);
                    setData(res.data.empAdhoc);

                })
        }
        fetchEmp();
    }, [])


    const Delete = (record) => {
        Modal.confirm({
            title: "Are you sure you want to delete this",
            onOk: () => {
                setData((pre) => {
                    return pre.filter((person) => person.id !== record.id);
                });
            },
        });
    };

    const Edit = (record) => {
        console.log(record);
        setVisible(true);
        setEdit({ ...record });
    };

    const ResetEditing = () => {
        setVisible(false);
        setEdit(true);
    };
    return (
        <>

            <Table
                dataSource={data}
                columns={columns}
                scroll={{ x: 1300 }}
                pagination={{ pageSize: 4, total: 50, showSizeChanger: true }}
                bordered
            />
            <Modals
                visible={visible}
                edit={edit}
                setEdit={setEdit}
                setData={setData}
                ResetEditing={ResetEditing}
                setVisible={setVisible}
            />
        </>
    );
};


