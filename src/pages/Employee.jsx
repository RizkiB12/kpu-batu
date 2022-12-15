import React from 'react';
import { useSelector } from 'react-redux';
import CreateFormEmployee from '../components/admin/Employee/CreateFormEmployee';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableEmployee from '../components/admin/TableEmployee';

const Employee = () => {
    const { authUser } = useSelector(state => state.authUser)


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
                <CreateFormEmployee />
            }
            <TableEmployee />
        </LayoutAdmin>

    )

}
export default Employee;