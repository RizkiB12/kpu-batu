import React from 'react';
import CreateForm from '../components/admin/CreateForm';
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
            <CreateForm />
            <TableEmployee />
        </LayoutAdmin>

    )

}
export default Employee;