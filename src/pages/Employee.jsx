import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableEmployee from '../components/admin/TableEmployee';

const Employee = () => {
    const { authUser } = useSelector(state => state.authUser)
    const navigate = useNavigate()


    const breadcumb = [
        {
            name: 'Employee',
            link: '/employee',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            {
                authUser.role === 'admin' &&
                <Button type="primary" onClick={() => navigate('/addemployee')} style={{ marginBottom: 15 }}>Add Employee</Button>
            }
            <TableEmployee />
        </LayoutAdmin>

    )

}
export default Employee;