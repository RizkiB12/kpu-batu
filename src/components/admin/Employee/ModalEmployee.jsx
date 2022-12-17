import { Form, Modal, Input } from "antd";
import React from "react";


const ModalEmployee = ({visible, edit, onFinishUpdate, ResetEditing, form}) => {
    
    return(
        <>
            <Modal
                title="Edit Employee"
                visible={visible}
                okText="Save"
                onCancel={() => {
                    ResetEditing();
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
                        rules={[ { required: true, message: 'Please input your name'},]}
                    >
                        <Input
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[ { required: true, message: 'Please input your email'},]}
                    >
                        <Input
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[ { required: true, message: 'Please input your password'},]}
                    >
                        <Input.Password
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalEmployee;