import React from "react";
import { Input, Modal, Form, DatePicker, Select, InputNumber } from "antd";
import moment from "moment/moment";



const Modals = ({ visible, edit, onFinishUpdate, ResetEditing, form }) => {
    const { setFieldsValue } = form

    const OPTION_PENDIDIKAN_TERAKHIR = [
        {
            value: 'smp',
            label: 'SMP'
        },
        {
            value: 'sma',
            label: 'SMA'
        },
        {
            value: 's1',
            label: 'S1'
        },
        {
            value: 's2',
            label: 'S2'
        },
    ]

    return (
        <>
            <Modal
                title="Edit Details Employee Adhoc"
                visible={visible}
                okText="Save"
                onCancel={() => ResetEditing()}
                onOk={form.submit}
            >
                <Form form={form} layout="vertical" onFinish={onFinishUpdate}>
                    <Form.Item name="name" label="Nama" initialValue={edit?.user?.name}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="dob" label="Tanggal Lahir" initialValue={moment(edit?.dob, 'YYYY-MM-DD')}>
                        <DatePicker defaultValue={moment(edit?.dob, 'YYYY-MM-DD')} />
                    </Form.Item>
                    <Form.Item name="dop" label="Tempat Lahir" initialValue={edit?.dop}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="alamat" label="Alamat" initialValue={edit?.alamat}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="no_hp" label="No HP" initialValue={`0${edit?.no_hp}`}>
                        <InputNumber addonBefore="+62" />
                    </Form.Item>
                    <Form.Item name="pendidikan_terakhir" label="Pendidikan Terakhir" initialValue={edit?.pendidikan_terakhir}>
                        <Select
                            defaultValue={edit?.pendidikan_terakhir}
                            onChange={(e) => setFieldsValue('pendidikan_terakhir', e)}
                            options={OPTION_PENDIDIKAN_TERAKHIR}
                        />
                    </Form.Item>
                    <Form.Item name="user_id" initialValue={edit?.user_id} hidden />
                </Form>
            </Modal>
        </>
    );
};

export default Modals;
