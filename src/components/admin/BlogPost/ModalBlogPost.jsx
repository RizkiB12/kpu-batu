import React from 'react';
import { Modal, Input, Form, Upload, DatePicker } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment/moment';

const ModalBlogPost = ({ visible, edit, onFInishUpdate, resetEditing, form}) => {
    return (
        <>
         <Modal
                title="Edit Details Blog Post"
                visible={visible}
                okText="Save"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={form.submit}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    onFinish={onFInishUpdate}
                >
                    <Form.Item
                        label="Upload"
                        valuePropName="fileList"
                    >
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="Judul"
                        rules={[ { required: true, message: 'Please input your title'},]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Deskripsi"
                        rules={[ { required: true, message: 'Please input your description'},]}
                    >
                        <Input.TextArea
                            showCount maxLength={1000}
                        />
                    </Form.Item>
                    <Form.Item name="dob" label="Tanggal Lahir" initialValue={moment(edit?.dob, 'YYYY-MM-DD')} rules={[ { required: true, message: 'Please input your date'},]}>
                        <DatePicker defaultValue={moment(edit?.dob, 'YYYY-MM-DD')} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalBlogPost;