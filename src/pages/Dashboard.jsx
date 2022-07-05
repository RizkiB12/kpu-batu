import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin';
import { TableData } from '../components/admin/TableData';

const Dashboard = () => {
    const breadcumb = [
        {
            name: 'Dashboard',
            link: '/dashboard',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <TableData />
        </LayoutAdmin>
    )
}

export default Dashboard;