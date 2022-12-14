import { EditOutlined, DeleteOutlined, FilePdfOutlined, FileImageOutlined } from "@ant-design/icons";
import { Modal, Row } from "antd";
import moment from "moment/moment";
import { useState } from "react";

export const FilePDF = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", }}>
            <FilePdfOutlined style={{ fontSize: "32px", }} />
        </div>
    )
}

export const RowFile = (props) => {
    const { fileSrc, typeFile } = props
    const [previewOpen, setPreviewOpen] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const handleOpenModal = () => {
        setPreviewOpen(true)
        setModalVisible(true)
    }

    const handleCloseModal = () => {
        setTimeout(() => {
            setModalVisible(false)
            setPreviewOpen(false)
        }, 100);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", }} onClick={handleOpenModal}>
            {
                typeFile === 'image' ? <FileImageOutlined style={{ fontSize: "32px", }} /> : <FilePdfOutlined style={{ fontSize: "32px", }} />
            }
            <Modal
                open={previewOpen}
                footer={null}
                onCancel={handleCloseModal}
                visible={modalVisible}
                bodyStyle={typeFile === 'pdf' ? { height: 800 } : null}
            >
                {
                    typeFile === 'image' ? <img
                        alt="example"
                        style={{
                            width: '100%',
                        }}
                        src={fileSrc}
                    /> :
                        <iframe src={fileSrc} type="application/pdf" width="100%" height="100%" title="File PDF" />
                }
                <div>
                    button delete dan edit
                </div>
            </Modal>
        </div>
    )
}

export const ColumnEmpAdhoc = ({ Delete, Edit, authUser }) =>
    [
        {
            key: "user.name",
            title: "Name",
            render: item => item.user.name,
            sorter: (a, b) => a.user_id > b.user_id,
            sortDirections: ["descend"],
            fixed: 'left',
            width: 150,
        },
        {
            key: "foto",
            title: "Foto",
            width: 100,
            render: (item, record) => {
                return (
                    <div>
                        <img src={item?.foto || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="Foto Employee Adhoc" />
                    </div>
                );
            },
        },
        {
            key: "dob",
            title: "Tanggal Lahir",
            width: 200,
            render: item => moment(item.dob).format('Do MMMM YYYY'),

        },
        {
            key: "dop",
            title: "Tempat",
            dataIndex: "dop",
            width: 150,
        },
        {
            key: "alamat",
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
            key: "no_hp",
            title: "Nomer HP",
            dataIndex: "no_hp",
            width: 150,
        },
        {
            key: "kes",
            title: "BPJS Kesehatan",
            dataIndex: "kes",
            width: 150,
        },
        {
            key: "ket",
            title: "BPJS Ketenagakerjaan",
            dataIndex: "ket",
            width: 150,
        },
        {
            key: "npwp",
            title: "NPWP",
            dataIndex: "npwp",
            width: 150,
        },
        {
            key: "agama",
            title: "Agama",
            dataIndex: "agama",
            width: 150,
        },
        {
            key: "pendidikan_terakhir",
            title: "Pendidikan",
            dataIndex: "pendidikan_terakhir",
            width: 150,
        },
        {
            key: "ktp",
            title: "KTP",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.ktp !== null ? <RowFile fileSrc={item?.ktp} typeFile={'image'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "spsp",
            title: "SPSPS",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.spsp !== null ? <RowFile fileSrc={item?.spsp} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "spi",
            title: "SPI",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.spi !== null ? <RowFile fileSrc={item?.spi} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "stpol",
            title: "STPOL",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.stpol !== null ? <RowFile fileSrc={item?.stpol} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "skes",
            title: "SKES",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.skes !== null ? <RowFile fileSrc={item?.skes} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "ijazah",
            title: "Ijazah",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.ijazah !== null ? <RowFile fileSrc={item?.ijazah} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "skck",
            title: "SKCK",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.skck !== null ? <RowFile fileSrc={item?.skck} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "stskpu",
            title: "STSKPU",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.stskpu !== null ? <RowFile fileSrc={item?.stskpu} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "sbth",
            title: "SBTH",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.sbth !== null ? <RowFile fileSrc={item?.sbth} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "stpp",
            title: "STPP",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.stpp !== null ? <RowFile fileSrc={item?.stpp} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "sdom",
            title: "SDOM",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.sdom !== null ? <RowFile fileSrc={item?.sdom} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "kk",
            title: "KK",
            width: 200,
            render: (item) => {
                return (
                    <>
                        {item.kk !== null ? <RowFile fileSrc={item?.kk} typeFile={'pdf'} /> : ''}
                    </>
                );
            },
        },
        {
            key: "action",
            title: authUser?.role === 'admin' ? "Actions" : "",
            width: authUser?.role === 'admin' ? 150 : 0,
            fixed: 'right',
            render: (record) => {
                return (
                    <>
                        {
                            authUser?.role === 'admin' &&
                            <Row justify="space-evenly">
                                <EditOutlined
                                    style={{ color: "black", fontSize: "14px" }}
                                    onClick={() => Edit(record)}
                                />
                                <DeleteOutlined
                                    style={{ color: "red", fontSize: "14px" }}
                                    onClick={() => Delete(record)}
                                />
                            </Row>
                        }
                    </>
                );
            },
        }
        ,
    ];