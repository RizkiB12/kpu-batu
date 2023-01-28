import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin'
import CreateFormEmployee from '../components/admin/Employee/CreateFormEmployee'

const addEmployee = () => {
    const breadcumb = [
        {
            name: "Add Employee",
            link: "/addemployee",
        }
    ]

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <CreateFormEmployee />
        </LayoutAdmin>
    )

}

export default addEmployee