import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin';
import { TableData } from '../components/admin/TableData';
import { Button } from 'antd';
const EmployeeAdhoc = () => {
    const breadcumb = [
        {
            name: 'Employees Adhoc',
            link: '/dashboard',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type="primary" style={{ marginBottom: 15 }}>Export Data</Button>
            <TableData />
        </LayoutAdmin>
    )
}

export default EmployeeAdhoc;