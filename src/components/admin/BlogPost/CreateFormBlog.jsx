import { Button, Form, Input, message, Upload } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import TextArea from 'antd/lib/input/TextArea';

const LIST_FILE_UPLOAD = [
    {
        name: 'thumbnail_img',
        label: 'Foto',
        note: 'Upload JPG/JPEG/PNG',
    }
]

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const CreateFormBlog = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const { authUser } = useSelector(state => state.authUser)
    const formData = new FormData()
    const [fileUpload, setFileUpload] = useState()
    console.log('this file will be upload', fileUpload)
    console.log('type of fileUpload', typeof fileUpload)

    const onFinish = (values) => {

        if (fileUpload !== undefined) {
            for (const [key, value] of Object.entries(fileUpload)) {
                formData.append(key, value)
            }
        }

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        const loading = message.loading('Loading...');
        axios.post(`${process.env.REACT_APP_API_URL}news/create`, formData, {
            headers: { 'Authorization': 'Bearer ' + authUser.access_token }
        }).then(res => {
            console.log(res.data)
            message.success('Success to Add Data')
            navigate('/blogpost')
        }).catch(error => {
            message.error(error.message)
        }).finally(()=>{
            loading()
        })
    };

    const validate = (file, type) => {
        console.log('this add file', { file, type })
        const isAllowedType = file.type === type
        console.log('is allowed', isAllowedType)
        if (!isAllowedType) {
            console.log('failed validate')
            message.error('Not allowed format file!')
        }
        return isAllowedType || Upload.LIST_IGNORE
    }

    const addFile = (name, { file }) => {
        console.log('this handle change', { name, file })
        setFileUpload(prevState => ({
            ...prevState,
            [name]: file.originFileObj
        }))
    }

    const dummyRequest = async ({ file, onSuccess }) => {
        console.log('this dummy request', { file, onSuccess })
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    }

    const removeFile = (name) => {
        console.log('this remove file', name)
        let updatedFile = fileUpload
        delete updatedFile[name]
        setTimeout(() => {
            setFileUpload(updatedFile)
        }, 100);
    }


    return (
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
        }}
        scrollToFirstError
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
    >
        <Form.Item
            name="title"
            label="Judul"
            align="left"
            rules={[
                {
                    type: 'title',
                    message: 'The input is not valid title!',
                },
                {
                    required: true,
                    message: 'Please input your title!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="description"
            label="Deskripsi"
            rules={[
                {
                    required: true,
                    message: 'Please input your description!',
                },
            ]}
        >
            <TextArea />
        </Form.Item>

        {
            LIST_FILE_UPLOAD.map(item => (
                <Form.Item
                    key={item.name}
                    label={item.label}
                    extra={item.extra}
                >
                    <Upload customRequest={dummyRequest} onChange={(file) => addFile(item.name, file)} beforeUpload={(file) => validate(file, item.type)} onRemove={() => removeFile(item.name)}>
                        <Button icon={<UploadOutlined />}>{item.note}</Button>
                    </Upload>
                </Form.Item>
            ))
        }

        <Form.Item {...tailFormItemLayout}
            wrapperCol={{
                offset: 4,
                span: 8,
            }}>
            <Button type="primary" htmlType="submit"  >
                Submit
            </Button>
        </Form.Item>

    </Form>
    );
};

export default CreateFormBlog;