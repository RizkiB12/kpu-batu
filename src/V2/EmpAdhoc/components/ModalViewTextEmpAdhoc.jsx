import { DatePicker, Form, Input, InputNumber, Modal, Select } from 'antd'
import React from 'react'
import moment from 'moment'
import { OPTION_AGAMA, OPTION_PENDIDIKAN_TERAKHIR } from '../enum'

const ModalViewTextEmpAdhoc = (props) => {
    const { visible, edit, onFinishUpdate, handleCancelEditing, form, loading } = props
    const { setFieldsValue } = form

    return (
        <Modal
            title="Edit Details Employee Adhoc"
            visible={visible}
            okText="Save"
            onCancel={() => handleCancelEditing()}
            onOk={form.submit}
            okButtonProps={{ disabled: loading }}
        >
            <Form form={form} layout="vertical" onFinish={onFinishUpdate}>
                <Form.Item name="name" label="Nama" initialValue={edit?.user?.name} rules={[{ required: true, message: 'Please input your name' },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="dob" label="Tanggal Lahir" initialValue={moment(edit?.dob, 'YYYY-MM-DD')} rules={[{ required: true, message: 'Please input your date of birth' },]}>
                    <DatePicker defaultValue={moment(edit?.dob, 'YYYY-MM-DD')} />
                </Form.Item>
                <Form.Item name="dop" label="Tempat Lahir" initialValue={edit?.dop} rules={[{ required: true, message: 'Please input your place of birth ' },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="alamat" label="Alamat" initialValue={edit?.alamat} rules={[{ required: true, message: 'Please input your address' },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="no_hp" label="No HP" initialValue={`0${edit?.no_hp}`} rules={[{ required: true, message: 'Please input your phone number' },]}>
                    <InputNumber addonBefore="+62" />
                </Form.Item>
                <Form.Item name="kes" label="BPJS Kesehatan" initialValue={edit?.kes} rules={[{ required: true, message: 'Please input your BPJS Kesehatan' },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="ket" label="BPJS Ketenagakerjaan" initialValue={edit?.ket} rules={[{ required: true, message: 'Please input your BPJS Ketenagakerjaan' },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="npwp" label="NPWP" initialValue={edit?.npwp} rules={[{ required: true, message: 'Please input your NPWP' },]}>
                    <Input />
                </Form.Item>
                <Form.Item name="agama" label="Agama" initialValue={edit?.agama} rules={[{ required: true, message: 'Please input your religon' },]}>
                    <Select
                        defaultValue={edit?.agama}
                        onChange={(e) => setFieldsValue('agama', e)}
                        options={OPTION_AGAMA}
                    />
                </Form.Item>
                <Form.Item name="pendidikan_terakhir" label="Pendidikan Terakhir" initialValue={edit?.pendidikan_terakhir} rules={[{ required: true, message: 'Please input your education' },]}>
                    <Select
                        defaultValue={edit?.pendidikan_terakhir}
                        onChange={(e) => setFieldsValue('pendidikan_terakhir', e)}
                        options={OPTION_PENDIDIKAN_TERAKHIR}
                    />
                </Form.Item>
                <Form.Item name="user_id" initialValue={edit?.user_id} hidden />
            </Form>
        </Modal>

    );
}

export default ModalViewTextEmpAdhoc