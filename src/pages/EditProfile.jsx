import LayoutAdmin from "../components/admin/LayoutAdmin";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Radio,
  Image,
  Col,
  Row,
  Space,
  Upload,
  message
} from "antd";
import React, { useState } from "react";

export default function Dashboard() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      }
      : null;

  const breadcumb = [
    {
      name: "Edit Profile",
      link: "/editProfile",
    },
  ];

  const success = () => {
    message.success('Success to edit profile');
  };



  return (
    <LayoutAdmin breadcumb={breadcumb}>
      <Row>
        <Col span={18} push={6}>
          <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
          >
            <Form.Item label="Form Layout" name="layout">
              <Radio.Group value={formLayout}>
                <Radio.Button value="horizontal">Horizontal</Radio.Button>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                <Radio.Button value="inline">Inline</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Nama">
              <Input placeholder="Masukkan Nama" />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password placeholder="Masukkan password" />
            </Form.Item>
            <Form.Item label="Ulang Password">
              <Input.Password placeholder="Masukkan ulang password" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary" onClick={success}>Submit</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={6} pull={18}>
          <center>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />{" "}
            <br />
            Nama <br />
            Keterangan
            <Space
              direction="vertical"
              style={{
                width: "100%",
                margin: "20px 0 0 0",
              }}
              size="large"
            >
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Space>
          </center>
        </Col>
      </Row>
    </LayoutAdmin>
  );
}
