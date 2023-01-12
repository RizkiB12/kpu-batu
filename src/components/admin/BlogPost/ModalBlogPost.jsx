import React from 'react';
import { Modal, Input, Form } from "antd";
// import moment from 'moment/moment';

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
                        initialValue={edit?.description}
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