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
                {/* asking */}
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    onFinish={onFInishUpdate}
                >
                    <Form.Item
                        name="title"
                        label="Judul"
                        initialValue={edit?.title}
                        rules={[ { required: true, message: 'Please input your title'},]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Deskripsi"
                        rules={[ { required: true, message: 'Please input your description'},]}
                    >
                        <Input.TextArea
                            showCount maxLength={1000}
                        />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Deskripsi"
                        rules={[ { required: true, message: 'Please input your description'},]}
                    >
                        <Input.TextArea
                            showCount maxLength={1000}
                        />
                    </Form.Item>
                    
                </Form>
            </Modal>
        </>
    )
}

export default ModalBlogPost;