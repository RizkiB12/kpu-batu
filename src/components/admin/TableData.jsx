import { Button, Modal, Space, Table } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '5',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
    {
        key: '6',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

export const TableData = () => {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age',
        });
    };

    const showAdd = () => {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',

            onOk() {
                console.log('OK');
            },

            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const showDelete = () => {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',

            onOk() {
                console.log('OK');
            },

            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
            ],
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },

    ];
    return (
        <>
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
                <Button onClick={showDelete}>Delete Data</Button>
                <Button type="primary">Export Data</Button>
            </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange} />
        </>
    );
};

