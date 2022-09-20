import { Table } from 'antd';
import React from 'react';
import { data } from './Data';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Tanggal',
        dataIndex: 'tanggal',
        key: 'tanggal lahir',
        width: 150,
    },
    {
        title: 'Tempat',
        dataIndex: 'tempat',
        key: 'tempat lahir',
        width: 150,
    },
    {
        title: 'Alamat',
        dataIndex: 'alamat',
        key: 'alamat',
        width: 150,
    },
    {
        title: 'Facebook',
        dataIndex: 'facebook',
        key: 'facebook',
        width: 150,
    },
    {
        title: 'Nomer HP',
        dataIndex: 'hp',
        key: 'nomer hp',
        width: 150,
    },
    {
        title: 'Pendidikan',
        dataIndex: 'pendidikan',
        key: 'pendidikan terakhir',
        width: 150,
    },
];


const TabelPrint = () => <Table
    columns={columns} dataSource={data}
    pagination={{ pageSize: 6, total: 50, showSizeChanger: true }}
    bordered />;

export default TabelPrint;