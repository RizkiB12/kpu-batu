import React from "react";
import { Input, Modal, Form, DatePicker } from "antd";


const Modals = ({ visible, edit, setEdit, setData, ResetEditing }) => {

    const [form] = Form.useForm();
    return (
        <>
            <Modal
                title="Edit Details Employee Adhoc"
                visible={visible}
                okText="Save"
                onCancel={() => /*setVisible(false)*/ ResetEditing()}
                onOk={() => /*setVisible(false)*/ {
                    setData((pre) => {
                        return pre.map((student) => {
                            if (student.id === edit.id) {
                                return edit;
                            } else {
                                return student;
                            }
                        });
                    });
                    ResetEditing();
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                >
                    <Form.Item
                        label="Nama"
                    >
                        <Input
                            value={edit?.user?.name}
                            onChange={(e) => {
                                setEdit((pre) => {
                                    return { ...pre, name: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>

                    <Form.Item label="Tanggal Lahir">
                        <DatePicker
                        />
                    </Form.Item>

                    <Form.Item
                        label="Tempat Lahir"
                    >
                        <Input
                            value={edit?.dop}
                            onChange={(e) => {
                                setEdit((pre) => {
                                    return { ...pre, dop: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Alamat"
                    >
                        <Input
                            value={edit?.alamat}
                            onChange={(e) => {
                                setEdit((pre) => {
                                    return { ...pre, alamat: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Nomer Handphone"
                    >
                        <Input
                            value={edit?.no_hp}
                            onChange={(e) => {
                                setEdit((pre) => {
                                    return { ...pre, no_hp: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Pendidikan Terakhir"
                    >
                        <Input
                            value={edit?.pendidikan}
                            onChange={(e) => {
                                setEdit((pre) => {
                                    return { ...pre, pendidikan: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Modals;
