import { Button, Form, Input, Modal, message, Upload, DatePicker } from 'antd';
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

const success = () => {
    message.success('This is a success add data blog post');
};


const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
};

const onOk = (value) => {
    console.log('onOk: ', value);
};

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Create a new blog post"
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
                <Form.Item name="date-time-picker" label="Tanggal">
                    <DatePicker showTime onChange={onChange} onOk={onOk} />
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

const CreateFormBlog = () => {
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
                Add Blog Post
            </Button>
            <CollectionCreateForm
                open={open}
                onCreate={success}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </div>
    );
};

export default CreateFormBlog;