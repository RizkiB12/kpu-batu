import { Button, Form, Input, message, Select } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';


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



const CreateFormEmployee = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const { authUser } = useSelector(state => state.authUser)

    const onFinish = (values) => {
        console.log(values);
        const loading = message.loading('Loading...');
        axios.post(`${process.env.REACT_APP_API_URL}auth/signup`, values, {
            headers: { 'Authorization': 'Bearer ' + authUser.access_token }
        }).then(res => {
            console.log(res.data)
            message.success('Success to Add Data')
            navigate('/employee')
        }).catch(error => {
            message.error(error.message)
        }).finally(()=>{
            loading()
        })
    };

    return (
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
    >
        <Form.Item
            name="name"
            label="Name"
            align="left"
            rules={[
                {
                    type: 'name',
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
            name="email"
            label="Email"
            align="left"
            rules={[
                {
                    type: 'email',
                    message: 'The input is not valid email!',
                },
                {
                    required: true,
                    message: 'Please input your email!',
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
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
                name="role"
                label="Role"
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your role!',
                    },
                ]}
            >
                <Select placeholder="Select Role">
                    <Option value="admin">Admin</Option>
                    <Option value="user">User</Option>
                </Select>
            </Form.Item>


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

export default CreateFormEmployee;