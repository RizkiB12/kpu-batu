import {
    Button,
    Form,
    Input,
    DatePicker,
    Upload,
    Select,
    message,
    InputNumber
} from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import '../../../assets/css/add.css';

import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const { Option } = Select;

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

const LIST_FILE_UPLOAD = [
    {
        name: 'foto',
        label: 'Foto',
        extra: 'PNG file max size 1MB',
        type: 'image/png',
        note: 'Upload PNG Only',
    },
    {
        name: 'ktp', // field yang dipake di db
        label: 'KTP', // nama dari input yang ada di fe
        extra: 'PNG file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'image/png', // type of file
        note: 'Upload PNG Only',
    },
    {
        name: 'spsp', // field yang dipake di db
        label: 'SPSPS', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    {
        name: 'spi', // field yang dipake di db
        label: 'SPI', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    {
        name: 'stpol', // field yang dipake di db
        label: 'STPOL', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    {
        name: 'skes', // field yang dipake di db
        label: 'SKES', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    {
        name: 'skck', // field yang dipake di db
        label: 'SKCK', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    {
        name: 'stskpu', // field yang dipake di db
        label: 'STSKPU', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    {
        name: 'sbth', // field yang dipake di db
        label: 'SBTH', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    {
        name: 'stpp', // field yang dipake di db
        label: 'STPP', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    {
        name: 'sdom', // field yang dipake di db
        label: 'SDOM', // nama dari input yang ada di fe
        extra: 'PDF file max size 1MB', // note example: "PNG file max size 1MB, 3x4"
        type: 'application/pdf', // type of file
        note: 'Upload PDF',
    },
    

]

export const Add = () => {
    const [form] = Form.useForm();
    const { authUser } = useSelector(state => state.authUser)
    const formData = new FormData()
    const [fileUpload, setFileUpload] = useState()
    console.log('this file will be upload', fileUpload)
    console.log('type of fileUpload', typeof fileUpload)

    const onFinish = (values) => {

        if (values !== null) {
            for (const [key, value] of Object.entries(values)) {
                if (key === 'no_hp') {
                    formData.append(key, `0${value}`)
                } else {
                    formData.append(key, value)
                }
            }
        }

        if (fileUpload !== undefined) {
            for (const [key, value] of Object.entries(fileUpload)) {
                formData.append(key, value)
            }
        }

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        axios.post(`${process.env.REACT_APP_API_URL}emp-adhoc/create`, formData, {
            headers: { 'Authorization': 'Bearer ' + authUser.access_token }
        }).then(res => {
            console.log(res.data)
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
                name="name"
                label="Nama"
                align="left"
                rules={[
                    {
                        type: 'nama',
                        message: 'The input is not valid name!',
                    },
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="dob"
                label="Tanggal Lahir"
                rules={[
                    {
                        required: true,
                        message: 'Please input your birth of date!',
                    },
                ]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                name="dop"
                label="Tempat Lahir"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your birth of place!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="alamat"
                label="Alamat"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your address!',
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                name="kes"
                label="BPJS Kesehatan"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your BPJS Kesehatan!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="ket"
                label="BPJS Ketenagakerjaan"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your BPJS Ketenagakerjaan!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="npwp"
                label="NPWP"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your NPWP!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="no_hp"
                label="No HP"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your phone number!',
                    },
                ]}
            >
                <InputNumber addonBefore="+62" placeholder={88123423212} />
            </Form.Item>

            <Form.Item
                name="agama"
                label="Agama"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your religion!',
                    },
                ]}
            // mengganti menjadi select
            >
                <Select placeholder="Pilih Agama">
                    <Option value="islam">Islam</Option>
                    <Option value="kristen">Kristen</Option>
                    <Option value="katolik">Katolik</Option>
                    <Option value="hindu">Hindu</Option>
                    <Option value="budha">Budha</Option>
                    <Option value="konghucu">Konghucu</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="pendidikan_terakhir"
                label="Pendidikan"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your last education!',
                    },
                ]}
            // mengganti menjadi select
            >
                <Select placeholder="Pilih Pendidikan Terakhir">
                    <Option value="smp">SMP</Option>
                    <Option value="sma">SMA</Option>
                    <Option value="s1">S1</Option>
                    <Option value="s2">S2</Option>
                </Select>
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
                <Button type="primary" htmlType="submit" >
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
};

