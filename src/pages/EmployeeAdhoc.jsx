import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin';
import { TableData } from '../components/admin/TableData';
const EmployeeAdhoc = () => {
    const breadcumb = [
        {
            name: 'Employees',
            link: '/dashboard',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <TableData />
        </LayoutAdmin>
    )
}

export default EmployeeAdhoc;