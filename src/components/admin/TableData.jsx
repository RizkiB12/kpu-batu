import { Input, Table, Select } from 'antd'
import Button from "antd-button-color";
import React from 'react'

export const TableData = () => {
    const columns = [
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Column 1',
            dataIndex: 'address',
            key: '1',
            width: 150,
        },
        {
            title: 'Column 2',
            dataIndex: 'address',
            key: '2',
            width: 150,
        },
        {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3',
            width: 150,
        },
        {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4',
            width: 150,
        },
        {
            title: 'Column 5',
            dataIndex: 'address',
            key: '5',
            width: 150,
        },
        {
            title: 'Column 6',
            dataIndex: 'address',
            key: '6',
            width: 150,
        },
        {
            title: 'Column 7',
            dataIndex: 'address',
            key: '7',
            width: 150,
        },
        {
            title: 'Column 8',
            dataIndex: 'address',
            key: '8',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>action</a>,
        },
    ];
    const data = [];

    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edrward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
        });

        const { Search } = Input
        const onSearch = (value) => console.log(value);

        const { Option } = Select
        const handleChange = (value) => {
            console.log(`selected ${value}`);
        };

        return (
            <>
                <div className="flex justify-between mb-3">
                    <div className="flex gap-x-2">
                        <Button type="primary">Tambah Data</Button>
                        <Button type="">Export Data</Button>
                    </div>
                    <div className="flex gap-x-2">
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>

                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }}
                        />
                    </div>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 1500,
                        y: 300,
                    }}
                />
            </>
        )
    }
}
