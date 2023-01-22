/* eslint-disable jsx-a11y/anchor-is-valid */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, message, Row } from 'antd';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/AuthSlice';


const Login = () => {
    const dispatch = useDispatch();


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.post(`${process.env.REACT_APP_API_URL}auth/login`, values)
            .then(res => {
                console.log('this data res', res.data);
                const user = res.data;
                dispatch(login(user))
                
            })
    };

    const success = () => {
        message.success('Success to Login');
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

                            <Button onClick={success} type="primary" htmlType="submit" className="login-form-button">
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