import { Input, Table, Select } from 'antd'
import Button from "antd-button-color";
import React from 'react'

export const TableData = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ];

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
            <Table dataSource={dataSource} columns={columns} />;
        </>
    )
}
