import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableEmployee from '../components/admin/TableEmployee';


const Employee = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        console.log("clicked");
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    console.log(isModalOpen);

    const breadcumb = [
        {
            name: 'Employee',
            link: '/employee',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" onOk={handleOk} onCancel={handleCancel} visible={isModalOpen}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <TableEmployee />
        </LayoutAdmin>

    )

}
export default Employee;