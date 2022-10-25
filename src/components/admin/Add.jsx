import {
    Button,
    Form,
    Input,
    DatePicker,
    Upload,
    message,
} from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import '../../assets/css/add.css';

import React from 'react';

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e?.fileList;
};

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


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };



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
                name="Nama"
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
                name="bod"
                label="Tanggal Lahir"
                rules={[
                    {
                        required: true,
                        message: 'Please input your birth of date!',
                    },
                ]}
            >
                <DatePicker onChange={onChange} />
            </Form.Item>

            <Form.Item
                name="bop"
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
                name="Alamat"
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
                name="Instagram"
                label="Instagram"
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
                name="Facebook"
                label="Facebook"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your facebook!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="Foto"
                label="Foto"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PNG file max size 1MB, 3x4"
            >
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload PNG Only</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="Fotocopy KTP"
                label="Fotocopy KTP"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PNG file max size 1MB"
            >
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="SPSP"
                label="Surat Setia Pancasila "
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file max size 1MB, 3x4"
            >
                <Upload name="logo">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="SPI"
                label="Surat Pakta Integritas"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="STPOL"
                label="Surat Tidak Menjadi Parpol"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="text">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="SKES"
                label="Surat Keterangan Sehat"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="Ijazah"
                label="Fotocopy Ijazah"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PNG/PDF/JPEG/JPG file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="SKCK"
                label="SKCK"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="STSKPU"
                label="Surat Tidak Sanksi KPU"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="SBTH"
                label="Surat Belum Menjabat 2x"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="JPEG/JPG/PDF/PNG file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="STPP"
                label="Surat Tidak Kawin Sesama"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name="SDOM"
                label="Surat Domisili"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="PDF file max size 1MB"
            >
                <Upload name="logo" action="/upload.do" listType="picture">
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

