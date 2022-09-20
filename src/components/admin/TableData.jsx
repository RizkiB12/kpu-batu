import React, { useState } from "react";
import { Table, Modal, Empty } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { data } from "./Data";
import Modals from "./Modals";

export const TableData = () => {
    const columns = [
        {
            key: "name",
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => a.name > b.name,
            sortDirections: ["descend"],
            fixed: 'left',
            width: 150,
        },
        {
            key: "foto",
            title: "Foto",
            dataIndex: "foto",
            width: 100,
            render: (text, record) => {
                return (
                    <div>
                        <img src={record.productimage} />
                    </div>
                );
            },
        },
        {
            key: "tanggal lahir",
            title: "Tanggal",
            dataIndex: "tanggal",
            width: 150,
        },
        {
            key: "tempat lahir",
            title: "Tempat",
            dataIndex: "tempat",
            width: 150,
        },
        {
            key: "alamat",
            title: "Alamat",
            dataIndex: "alamat",
            width: 150,
            // render: (website) => <a href={website}>{website}</a>,
        },
        {
            key: "instagram",
            title: "Instagram",
            dataIndex: "instagram",
            width: 150,
        },
        {
            key: "facebook",
            title: "Facebook",
            dataIndex: "facebook",
            width: 150,
        },
        {
            key: "nomer hp",
            title: "Nomer HP",
            dataIndex: "hp",
            width: 150,
        },
        {
            key: "pendidikan terakhir",
            title: "Pendidikan",
            dataIndex: "pendidikan",
            width: 150,
        },
        {
            key: "fotocopy ktp",
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
            key: "surat setia pancasila",
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
            key: "surat pakta integritas",
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
            key: "surat tidak menjadi anggota parpol",
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
            key: "surat keterangan sehat",
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
            key: "fotocopy ijazah",
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
            key: "skck",
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
            key: "surat pernyataan tidak pernah sanksi kpu",
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
            key: "surat belum pernah menjabat 2 tahun",
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
            key: "surat pernyataan tidak dalam ikatan perkawinan dengan sesama penyelenggara",
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
            key: "surat keterangan domosili",
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
            key: "action",
            title: "Actions",
            width: 90,
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

    const [Data, setData] = useState(data);
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(null);

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
                dataSource={Data}
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


