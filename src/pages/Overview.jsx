import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin'

export function Overview() {
    const breadcumb = [
        {
            name: 'Overview',
            link: '/overview',
        },
    ];
    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <div>
                This is page overview
            </div>
        </LayoutAdmin>
    )
}
