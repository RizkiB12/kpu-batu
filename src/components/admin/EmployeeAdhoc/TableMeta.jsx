import { EditOutlined, DeleteOutlined, FilePdfOutlined, FileImageOutlined } from "@ant-design/icons";
import moment from "moment/moment";

export const ColumnEmpAdhoc = ({ Delete, Edit }) =>
    [
        {
            key: "user_id",
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
            width: 200,
            render: (item, record) => {
                return (
                    <div>
                        {item?.foto === null ? <div>Tidak ada foto</div> :
                            <FileImageOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "Tanggal Lahir",
            width: 150,
            render: item => moment(item.dob).format('Do MMMM YYYY'),

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
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.ktp === null ? <div>Tidak ada foto</div> :
                            <FileImageOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SPSPS",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.spsp === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SPI",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.spi === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "STPOL",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.stpol === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SKES",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.skes === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "Ijazah",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.ijazah === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SKCK",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.skck === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "STSKPU",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.stskpu === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SBTH",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.sbth === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "STPP",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.stpp === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "SDOM",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.sdom === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
                    </div>
                );
            },
        },
        {
            key: "user_id",
            title: "KK",
            width: 200,
            render: (item) => {
                return (
                    <div>
                        {item?.kk === null ? <div>Tidak ada file</div> :
                            <FilePdfOutlined />
                        }
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