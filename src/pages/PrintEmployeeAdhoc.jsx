import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin';
import TabelPrint from '../components/admin/TablePrint';
import { Button } from 'antd';


const PrintEmployeeAdhoc = () => {

    const handlePrint = () => {
        window.print();
    }

    const breadcumb = [
        {
            name: 'Print Adhoc',
            link: '/print',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Button type="primary" onClick={handlePrint} style={{ marginBottom: 15, marginLeft: 15 }}>Print EmployeeAdhoc</Button>
            <TabelPrint />
        </LayoutAdmin>
    )
}

export default PrintEmployeeAdhoc;