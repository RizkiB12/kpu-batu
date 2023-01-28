import React from 'react';
import { EditOutlined, DeleteOutlined,  FilePdfOutlined,
    FileImageOutlined } from "@ant-design/icons";
import { useState } from 'react';
import { Modal, Row } from 'antd';
// import moment from 'moment/moment';



export const RowFile = (props) => {
    const { fileSrc, typeFile, handleDelete } = props;
    const [previewOpen, setPreviewOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleOpenModal = () => {
      setPreviewOpen(true);
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setTimeout(() => {
        setModalVisible(false);
        setPreviewOpen(false);
      }, 100);
    };
  
    return (
      <div
        style={{ display: "flex", justifyContent: "center" }}
        onClick={handleOpenModal}
      >
        {typeFile === "image" ? (
          <FileImageOutlined style={{ fontSize: "32px" }} />
        ) : typeFile === "foto" ? (
          <img src={fileSrc} alt="Foto Blog Post" />
        ) : (
          <FilePdfOutlined style={{ fontSize: "32px" }} />
        )}
        <Modal
          open={previewOpen}
          footer={null}
          onCancel={handleCloseModal}
          visible={modalVisible}
          bodyStyle={typeFile === "pdf" ? { height: 800 } : null}
        >
          {typeFile === "image" || "foto" ? (
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={fileSrc}
            />
          ) : (
            <iframe
              src={fileSrc}
              type="application/pdf"
              width="100%"
              height="100%"
              title="File PDF"
            />
          )}
          <div>
            <Row justify="space-evenly">
              <EditOutlined
                onClick={(e)=>console.log('edit bos',e)}
                style={{ color: "black", fontSize: "15px", paddingTop: "10px" }}
              />
              <DeleteOutlined
                onClick={(e)=>console.log('delete mas', e)}
                style={{ color: "red", fontSize: "15px", paddingTop: "10px" }}
              />
            </Row>
          </div>
        </Modal>
      </div>
    );
  };
  


export const ColumnBlogPost = ({ Delete, Edit, authUser }) =>

[
    {
        key: "thumbnail_img",
        title: "Foto",
        render: (item, record) => {
            return (
                <>
                  {item.foto !== null ? (
                    <RowFile  handleDelete={Delete} edit={Edit} fileSrc={item?.foto} typeFile={"foto"} />
                  ) : (
                    <img
                      src={
                        item?.foto ||
                        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                      }
                      alt="Foto Blog Post"
                    />
                  )}
                </>
              );
        }
    },
    {
        key: "title",
        title: "Judul",
        dataIndex: "title",
    },
    {
        key: "description",
        title: "Deskripsi",
        dataIndex: "description",
    },
    {
        key: "user.name",
        title: "Author",
        render: (item) => item.user.name
    },
    {
        key: "action",
        title: authUser?.role === "admin" ? "Actions" : "",
        render: (record) => {
            return (
                <>
                    {authUser?.role === "admin" &&(
                    <Row justify="space-evenly">                   
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
                    </Row>
                     )}
                </>
               
            );
        },
    },
]