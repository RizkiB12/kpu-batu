import { Button, Form, Input, Modal, Upload, DatePicker } from 'antd';
import React, { useState } from 'react';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableBlogPost from '../components/admin/TableBlogPost';
import { PlusOutlined } from '@ant-design/icons';


const BlogPost = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        console.log("clicked");
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    console.log(isModalOpen);

    const breadcumb = [
        {
            name: 'Blog Post',
            link: '/blogpost',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type="primary" onClick={showModal}>
                Add Data Blog Post
            </Button>
            <Modal title="Modal Add Data Blog Post" onOk={handleOk} onCancel={handleCancel} visible={isModalOpen}>
                <Form
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{
                        modifier: 'public',
                    }}
                >
                    <Form.Item label="Upload" valuePropName="fileList"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the image!',
                            },
                        ]}>
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Image
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item name="description" label="Description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the Description!',
                            },
                        ]}>
                        <Input type="textarea" />
                    </Form.Item>
                    <Form.Item label="DatePicker"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the Date!',
                            },
                        ]}>
                        <DatePicker />
                    </Form.Item>
                </Form>
            </Modal>
            <TableBlogPost />
        </LayoutAdmin>

    )

}
export default BlogPost;