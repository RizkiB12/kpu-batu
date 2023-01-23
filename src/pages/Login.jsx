/* eslint-disable jsx-a11y/anchor-is-valid */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, message, Row } from 'antd';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/AuthSlice';


const Login = () => {
    const dispatch = useDispatch();
    const [loadingSubmit, setLoadingSubmit] = useState(false)


    const onFinish = (values) => {
        setLoadingSubmit(true)
        const loading = message.loading('Loading...')
        console.log('Received values of form: ', values);
        axios.post(`${process.env.REACT_APP_API_URL}auth/login`, values)
            .then(res => {
                console.log('this data res', res.data);
                const user = res.data;
                message.success(res.data.message)
                dispatch(login(user)) 
            }).catch ((err) => {
                console.log(err.response.data.message);
                message.error(err.response.data.message)
            }).finally(() => {
                setLoadingSubmit(false);
                loading()
            })
    };



    return (
              <>
                <Row type="flex" justify="center" align="middle"
                style={{ minHeight: '100vh' }}>
                    <Col>
                    <Card>
                    <h1 className=''>Form Login Badan Adhoc</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email"  />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>

                            <Button
                            disabled={loadingSubmit}
                            type="primary" 
                            htmlType="submit" 
                            className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                    </Card>
                    </Col>
                    </Row>
                 </>
    );
};

export default Login;