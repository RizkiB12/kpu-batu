import { Form, Modal, Input } from "antd";
import React from "react";


const ModalEmployee = ({visible, employee, onFinishUpdate, resetEditing, form}) => {
    
    return(
        <>
            <Modal
                title="Edit Employee"
                visible={visible}
                okText="Save"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={form.submit}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    onFinish={onFinishUpdate}
                >
                    <Form.Item
                        name="name"
                        label="Nama"
                        initialValue={employee?.user?.name}
                        rules={[ { required: true, message: 'Please input your name'},]}
                    >
                        <Input
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        initialValue={employee?.user?.email}
                        rules={[ { required: true, message: 'Please input your email'},]}
                    >
                        <Input
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        initialValue={employee?.user?.password}
                        rules={[ { required: true, message: 'Please input your password'},]}
                    >
                        <Input.Password
                        />
                    </Form.Item>
                    <Form.Item
                        name="role"
                        label="Role"
                        initialValue={employee?.user?.role}
                        rules={[ { required: true, message: 'Please input your role'},]}
                    >
                        <Input
                        />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}

export default ModalEmployee;