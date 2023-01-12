import { Form, Modal, Input, Select } from "antd";
import React from "react";


const ModalEmployee = ({
  visible,
  employee,
  onFinishUpdate,
  resetEditing,
  form,
}) => {
  const { setFieldsValue } = form;

  const OPTION_ROLE = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "user",
      label: "User",
    },
  ];

  return (
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
          <Form.Item name="user_id" initialValue={employee?.id} hidden={true} />
          <Form.Item
            name="name"
            label="Nama"
            initialValue={employee?.name}
            rules={[{ required: true, message: "Please input your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            initialValue={employee?.email}
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            initialValue={employee?.password}
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            initialValue={employee?.role}
            rules={[
              {
                required: true,
                message: "Please confirm your role!",
              },
            ]}
          >
            <Select
                defaultValue={employee?.role}
                onChange={(e) => setFieldsValue('role',e)}
                options={OPTION_ROLE}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalEmployee;
