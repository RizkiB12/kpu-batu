import {
    Button,
    Form,
    Input,
    DatePicker,
    Upload,
    message,
    Select
} from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import '../../assets/css/add.css';

import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import moment from "moment"

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const { Option } = Select;

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
    const { authUser } = useSelector(state => state.authUser)
    const formData = new FormData()

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        formData.append('name', values.name)
        formData.append('email', `${values.name.replace(/\s/g, '').toLowerCase()}@example.com`)
        formData.append('dob', moment(values.dob).format('YYYY-MM-DD'))
        formData.append('no_hp', values.no_hp)
        axios.post(`${process.env.REACT_APP_API_URL}emp-adhoc/create`, formData, {
            headers: { 'Authorization': 'Bearer ' + authUser.access_token }
        }).then(res => {
            console.log(res.data)
        })
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
                <DatePicker onChange={onChange} />
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
                extra="PDF file"
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
                extra="PDF file"
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
                extra="PDF file"
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
                extra="PDF file"
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
                extra="PDF file "
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
                extra="PDF file"
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
                extra="PDF file"
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
                extra="PDF file "
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
                extra="PDF file"
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
                extra="PDF file"
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

