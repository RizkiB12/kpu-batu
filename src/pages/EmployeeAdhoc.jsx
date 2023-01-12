import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin';
import { TableData } from '../components/admin/TableData';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const EmployeeAdhoc = () => {
    const navigate = useNavigate()

    const breadcumb = [
        {
            name: 'Employees Adhoc',
            link: '/dashboard',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type="primary" onClick={() => navigate('/print')} style={{ marginBottom: 15 }}>Export Data</Button>
            <Button type="primary" onClick={() => navigate('/adddata')} style={{ marginBottom: 15, marginLeft: 15 }}>Add Data</Button>
            <Button type="primary" onClick={() => navigate('/print')} style={{ marginBottom: 15, marginLeft: 15 }}>Print EmployeeAdhoc</Button>
            <TableData />
        </LayoutAdmin>
    )
}

export default EmployeeAdhoc;