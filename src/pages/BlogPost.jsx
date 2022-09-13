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
            <Button type="primary" onClick={showModal} style={{ marginBottom: 15 }}>
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
                    <Form.Item label="Image" valuePropName="fileList"
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
                    <Form.Item
                        name="judul"
                        label="Judul"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the judul!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="deskripsi"
                        label="Deskripsi"
                        rules={[
                            {
                                required: true,
                                message: 'Please input Deskripsi',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={500} />
                    </Form.Item>

                    <Form.Item label="Tanggal"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the Tanggal!',
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