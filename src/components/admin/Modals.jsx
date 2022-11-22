import React from "react";
import { Input, Modal, Form, DatePicker, Select } from "antd";
import moment from "moment/moment";



const Modals = ({ visible, edit, setEdit, setData, ResetEditing }) => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const dateFormat = 'YYYY/MM/DD';
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
                        <DatePicker defaultValue={moment(edit?.dob, dateFormat)} format={dateFormat}
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
                        hasFeedback
                    >
                        <Select placeholder="Pilih Pendidikan Terakhir"
                            defaultValue={edit?.pendidikan_terakhir}
                            onChange={(e) => {
                                setEdit((pre) => {
                                    return { ...pre, pendidikan_terakhir: e };
                                });
                                console.log(e);
                            }}

                        >
                            <Option value="smp">SMP</Option>
                            <Option value="sma">SMA</Option>
                            <Option value="s1">S1</Option>
                            <Option value="s2">S2</Option>
                        </Select>

                        {/* <Input
                            value={edit?.pendidikan}
                            onChange={(e) => {
                                setEdit((pre) => {
                                    return { ...pre, pendidikan: e.target.value };
                                });
                            }}
                        /> */}
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Modals;
