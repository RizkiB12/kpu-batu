import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TabelPrint from '../components/admin/TablePrint';


const PrintEmployeeAdhoc = () => {
    const breadcumb = [
        {
            name: 'Print Adhoc',
            link: '/print',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <TabelPrint />
        </LayoutAdmin>
    )
}

export default PrintEmployeeAdhoc;