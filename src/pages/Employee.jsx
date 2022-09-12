import { Button, Form, Input, Modal, Upload, DatePicker } from 'antd';
import React, { useState } from 'react';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableEmployee from '../components/admin/TableEmployee';
import { PlusOutlined } from '@ant-design/icons';


const Employee = () => {

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
            name: 'Employee',
            link: '/employee',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type="primary" onClick={showModal}>
                Add Data Employee
            </Button>
            <Modal title="Modal Add Data Employee" onOk={handleOk} onCancel={handleCancel} visible={isModalOpen}>
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
                        name="nama"
                        label="Nama"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the Nama!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the Email!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
            <TableEmployee />
        </LayoutAdmin>

    )

}
export default Employee;