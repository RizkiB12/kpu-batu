import React from "react";
import { Input, Modal, Form, DatePicker, Select, InputNumber } from "antd";
import moment from "moment/moment";



const Modals = ({ visible, edit, onFinishUpdate, ResetEditing, form, handleDelete }) => {
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

    const OPTION_AGAMA = [
        {
            value : 'islam',
            label: 'Islam'
        },
        {
            value : 'kristen',
            label: 'Kristen'
        },
        {
            value : 'katolik',
            label: 'Katolik'
        },
        {
            value : 'buddha',
            label: 'Buddha'
        },
        {
            value : 'hindu',
            label: 'Hindu'
        },
        {
            value : 'konghucu',
            label: 'Konghucu'
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
                    <Form.Item name="name" label="Nama" initialValue={edit?.user?.name} rules={[ { required: true, message: 'Please input your name'},]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="dob" label="Tanggal Lahir" initialValue={moment(edit?.dob, 'YYYY-MM-DD')} rules={[ { required: true, message: 'Please input your date of birth'},]}>
                        <DatePicker defaultValue={moment(edit?.dob, 'YYYY-MM-DD')} />
                    </Form.Item>
                    <Form.Item name="dop" label="Tempat Lahir" initialValue={edit?.dop} rules={[ { required: true, message: 'Please input your place of birth '},]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="alamat" label="Alamat" initialValue={edit?.alamat} rules={[ { required: true, message: 'Please input your address'},]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="no_hp" label="No HP" initialValue={`0${edit?.no_hp}`} rules={[ { required: true, message: 'Please input your phone number'},]}>
                        <InputNumber addonBefore="+62" />
                    </Form.Item>
                    <Form.Item name="kes" label="BPJS Kesehatan" initialValue={edit?.kes} rules={[ { required: true, message: 'Please input your BPJS Kesehatan'},]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="ket" label="BPJS Ketenagakerjaan" initialValue={edit?.ket} rules={[ { required: true, message: 'Please input your BPJS Ketenagakerjaan'},]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="npwp" label="NPWP" initialValue={edit?.npwp} rules={[ { required: true, message: 'Please input your NPWP'},]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="agama" label="Agama" initialValue={edit?.agama} rules={[ { required: true, message: 'Please input your religon'},]}>
                        <Select
                            defaultValue={edit?.agama}
                            onChange={(e) => setFieldsValue('agama', e)}
                            options={OPTION_AGAMA}
                        />
                    </Form.Item>
                    <Form.Item name="pendidikan_terakhir" label="Pendidikan Terakhir" initialValue={edit?.pendidikan_terakhir} rules={[ { required: true, message: 'Please input your education'},]}>
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
