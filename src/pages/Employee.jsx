import React from 'react';
import CreateFormEmployee from '../components/admin/CreateFormEmployee';
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TableEmployee from '../components/admin/TableEmployee';

const Employee = () => {


    const breadcumb = [
        {
            name: 'Employee',
            link: '/employee',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <CreateFormEmployee />
            <TableEmployee />
        </LayoutAdmin>

    )

}
export default Employee;