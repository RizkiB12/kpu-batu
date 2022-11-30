import {
    Button,
    Form,
    Input,
    DatePicker,
    Upload,
    Select,
    message
} from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import '../../assets/css/add.css';

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

export const Add = () => {
    const [form] = Form.useForm();
    const { authUser } = useSelector(state => state.authUser)
    const formData = new FormData()
    const [fileUpload, setFileUpload] = useState(null)
    console.log('this file will be upload', fileUpload)

    const onFinish = (values) => {
        formData.append('name', values.name)
        if (fileUpload !== null) {
            for (const [key, value] of Object.entries(fileUpload)) {
                formData.append(key, value)
            }
        }
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        axios.post(`${process.env.REACT_APP_API_URL}emp-adhoc/createasda`, formData, {
            headers: { 'Authorization': 'Bearer ' + authUser.access_token }
        }).then(res => {
            console.log(res.data)
        })
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }

        return e?.fileList;
    };

    const addFile = (name, file, type) => {
        console.log(file)
        const isAllowedType = validateFileType(file, type)
        if (!isAllowedType) {
            message.error('Not allowed format file!')
            return false
        }
        let nameFile = name
        setFileUpload(prevState => ({
            ...prevState,
            [nameFile]: file
        }))
        return false
    }

    const validateFileType = (file, allowedTypes) => {
        if (!allowedTypes) {
            return true;
        }

        if (file) {
            return allowedTypes.includes(file.type);
        }
    };


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
                name="no_hp"
                label="No_HP"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your instagram!',
                    },
                ]}
            >
                <Input />
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

            <Form.Item
                name="foto"
                label="Foto"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PNG file max size 1MB, 3x4"
            >
                <Upload beforeUpload={(file) => addFile('foto', file, 'image/png')}>
                    <Button icon={<UploadOutlined />}>Upload PNG Only</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="ktp"
                label="KTP"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PNG file max size 1MB"
            >
                <Upload beforeUpload={(file) => addFile('ktp', file)}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="spsp"
                label="Surat Setia Pancasila "
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file"
            >
                <Upload beforeUpload={(file) => addFile('spsp', file)}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="spi"
                label="Surat Pakta Integritas"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file"
            >
                <Upload beforeUpload={(file) => addFile('spi', file)} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="stpol"
                label="Surat Tidak Menjadi Parpol"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file"
            >
                <Upload beforeUpload={(file) => addFile('stpol', file)} listType="text">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="skes"
                label="Surat Keterangan Sehat"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file"
            >
                <Upload beforeUpload={(file) => addFile('skes', file)} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="ijazah"
                label="Fotocopy Ijazah"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file "
            >
                <Upload beforeUpload={(file) => addFile('ijazah', file)} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="skck"
                label="SKCK"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file"
            >
                <Upload beforeUpload={(file) => addFile('skck', file)} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="stskpu"
                label="Surat Tidak Sanksi KPU"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file"
            >
                <Upload beforeUpload={(file) => addFile('stskpu', file)} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="sbth"
                label="Surat Belum Menjabat 2x"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file "
            >
                <Upload beforeUpload={(file) => addFile('sbth', file)} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="stpp"
                label="Surat Tidak Kawin Sesama"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file"
            >
                <Upload beforeUpload={(file) => addFile('stpp', file)} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="sdom"
                label="Surat Domisili"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file"
            >
                <Upload beforeUpload={(file) => addFile('sdom', file)} listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

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

