import { Button, Form, Input, Modal, message, Upload } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';

const props = {
    beforeUpload: (file) => {
        const isPNG = file.type === 'image/png';

        if (!isPNG) {
            message.error(`${file.name} is not a png file`);
        }

        return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
        console.log(info.fileList);
    },
};

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Create a new employee"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            visible={open}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="nama"
                    label="Nama"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the nama!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
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
                <Form.Item name="image" label="Image">
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload png only</Button>
                    </Upload>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const CreateForm = () => {
    const [open, setOpen] = useState(false);

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setOpen(true);
                    console.log('tekan');
                }}
            >
                Add Employee
            </Button>
            <CollectionCreateForm
                open={open}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </div>
    );
};

export default CreateForm;