import React from 'react';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import moment from 'moment/moment';



export const ColumnBlogPost = ({ Delete, Edit }) =>

[
    {
        key: "foto",
        title: "Foto",
        render: (item, record) => {
            return (
                <div>
                    <img src={item?.foto || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="Foto Blog Post" />
                </div>
            )
        }
    },
    {
        key: "judul",
        title: "Judul",
        dataIndex: "judul",
    },
    {
        key: "deskripsi",
        title: "Deskripsi",
        dataIndex: "deskripsi",
    },
    {
        key: "tanggal",
        title: "Tanggal",
        // render: item => moment().format('YYYY-MM-DD'),
    },
    {
        key: "action",
        title: "Actions",
        render: (record) => {
            return (
                <>
                    <EditOutlined
                        style={{ color: "black", fontSize: "15px" }}
                        onClick={() => {
                            Edit(record);
                        }}
                    />
                    <DeleteOutlined
                         style={{ color: "red", marginLeft: 12 }}
                        onClick={() => {
                            Delete(record);
                        }}
                   
                    />
                </>
            );
        },
    },
]