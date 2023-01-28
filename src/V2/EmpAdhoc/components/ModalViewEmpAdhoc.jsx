import { Modal, Row, Upload } from 'antd'
import React from 'react'
import {
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

const ModalViewEmpAdhoc = (props) => {
    const { openCell, setModalCell, dataCell, handleUpdateFile } = props
    return (
        <Modal
            open={openCell}
            visible={openCell}
            footer={null}
            onCancel={() => setModalCell(false)}
            bodyStyle={dataCell.typeFile === "pdf" ? { height: 800 } : null}
        >
            {
                dataCell.fileSrc === null ? (<div>tidak ada data</div>) : dataCell.typeFile === ("image" || "foto") ? (
                    <img
                        alt="example"
                        style={{
                            width: "100%",
                        }}
                        src={dataCell.fileSrc}
                    />
                ) : (
                    <iframe
                        src={dataCell.fileSrc}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        title="File PDF"
                    />
                )
            }
            <Row justify="space-evenly">
                <Upload
                    showUploadList={false}
                    maxCount={1}
                    beforeUpload={false}
                    customRequest={e => handleUpdateFile({ fileUpdate: e, nameFile: dataCell.nameFile, user_id: dataCell.user_id })}
                >
                    <EditOutlined
                        style={{ color: "black", fontSize: "15px", paddingTop: "10px" }}
                    />
                </Upload>
                <DeleteOutlined
                    onClick={(e) => console.log('delete bro', e)}
                    style={{ color: "red", fontSize: "15px", paddingTop: "10px" }}
                />
            </Row>
        </Modal>
    )
}

export default ModalViewEmpAdhoc