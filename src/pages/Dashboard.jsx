import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin'
import { Card, Col, Row, Statistic } from 'antd';
import { Divider } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
const { Meta } = Card;




export default function Dashboard() {

    const { authUser } = useSelector(state => state.authUser)

    const [empAdhoc, setEmpAdhoc] = useState([]);
    
useEffect(() => {
    const fetchEmp = () => {
        axios.get(`${process.env.REACT_APP_API_URL}emp-adhoc?page=1&limit=4`, {
            headers: { 'Authorization': 'Bearer ' + authUser.access_token }
        })
            .then((res) => {
                setEmpAdhoc(res.data.data);
            })
    }
    fetchEmp();
}, [authUser.access_token])


    const breadcumb = [
        {
            name: 'Dashboard',
            link: '/overview',
        },
    ];

    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <Divider orientation="left">Statistics</Divider>
            <Row gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }} >
                <Col span={8}>
                    <Card>
                        <Statistic title="In Total" value={200} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Active" value={112893} precision={2} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Inactive" value={112893} />
                    </Card>
                </Col>
            </Row>
            <Divider orientation="left">Employees</Divider>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                {
                    empAdhoc.map(item => {
                        return (
                        <Col key={item} className="gutter-row" span={6}>
                            <div>
                                <Card
                                    hoverable
                                    // style={{
                                    //     width: 250,
                                    // }}
                                    width={100}
                                    cover={
                                    <img alt="example" src={item?.foto || "https://joeschmoe.io/api/v1/random"}
                                    style={{ backgroundColor: '#F1F1F1' }} 
                                    />}>
                                    <Meta title={item?.user.name} description="www.instagram.com" />
                                </Card>
                            </div>
                        </Col>
                            
                        )
                    })
                }
            </Row>
        </LayoutAdmin>
    )
}
