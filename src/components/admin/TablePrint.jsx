import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from "moment/moment";
import 'moment/locale/id';

const columnPrint = ({authUser}) =>  [
    {
        title: 'Name',
        key: 'user.name',
        render: (item) => item.user.name,
        sorter: (a, b) => a.user_id > b.user_id,
        sortDirections: ["descend"],
        width: 150,
        fixed: "left",
    },
    {
        title: 'Tanggal Lahir',
        dataIndex: 'dob',
        key: 'dob',
        width: 150,
        render: (item) => moment(item.dob).format("Do MMMM YYYY"),
    },
    {
        title: 'Tempat',
        dataIndex: 'dop',
        key: 'dop',
        width: 150,
    },
    {
        title: 'Alamat',
        dataIndex: 'alamat',
        key: 'alamat',
        width: 150,
    },
    {
        title: 'Nomer HP',
        dataIndex: 'no_hp',
        key: 'no_hp',
        width: 150,
    },
    {
        title: 'BPJS Kesehatan',
        dataIndex: 'kes',
        key: 'kes',
        width: 150,
    },
    {
        title: 'BPJS Ketenagakerjaan',
        dataIndex: 'ket',
        key: 'ket',
        width: 150,
    },
    {
        title: 'NPWP',
        dataIndex: 'npwp',
        key: 'npwp',
        width: 150,
    },
    {
        title: 'Agama',
        dataIndex: 'agama',
        key: 'agama',
        width: 150,
    },
    {
        title: 'Pendidikan',
        dataIndex: 'pendidikan_terakhir',
        key: 'pendidikan_terakhir',
        width: 150,
    },
];


const TabelPrint = () =>
{
    const { authUser } = useSelector(state => state.authUser)
    const [data, setData] = useState([]);
    moment().locale('id')

    useEffect(() => {
        const fetchEmp = () => {
            axios.get(`${process.env.REACT_APP_API_URL}emp-adhoc?page=1&limit=10`, {
                headers: { 'Authorization': 'Bearer ' + authUser.access_token }
            })
                .then((res) => {
                    setData(res.data.data);
                })
        }
        fetchEmp();
    }, [authUser.access_token])

return (
    <>
    <Table
        columns={columnPrint({authUser})} 
        dataSource={data}
        pagination={{ pageSize: 8, total: 50, showSizeChanger: true }}
        bordered />;
        </>
    )
} 

export default TabelPrint;
