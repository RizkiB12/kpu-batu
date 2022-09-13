import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin'
import { Card, Col, Row, Statistic } from 'antd';
import { Divider } from 'antd';
const { Meta } = Card;

export default function Dashboard() {
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
                        <Statistic title="In Total" value={112893} />
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
                <Col className="gutter-row" span={6}>
                    <div>
                        <Card
                            hoverable
                            style={{
                                width: 250,
                            }}
                            cover={<img alt="example" src="https://joeschmoe.io/api/v1/random" style={{ backgroundColor: '#F1F1F1' }} />}
                        >
                            <Meta title="Rudi Saputra" description="www.instagram.com" />
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <Card
                            hoverable
                            style={{
                                width: 250,
                            }}
                            cover={<img alt="example" src="https://joeschmoe.io/api/v1/random" style={{ backgroundColor: '#F1F1F1' }} />}
                        >
                            <Meta title="Kirana Dewi" description="www.instagram.com" />
                        </Card></div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <Card
                            hoverable
                            style={{
                                width: 250,
                            }}
                            cover={<img alt="example" src="https://joeschmoe.io/api/v1/random" style={{ backgroundColor: '#F1F1F1' }} />}
                        >
                            <Meta title="Nicholas Saputra" description="www.instagram.com" />
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <Card
                            hoverable
                            style={{
                                width: 250,
                            }}
                            cover={<img alt="example" src="https://joeschmoe.io/api/v1/random" style={{ backgroundColor: '#F1F1F1' }} />}
                        >
                            <Meta title="Dodit Mulyanto" description="www.instagram.com" />
                        </Card>
                    </div>
                </Col>
            </Row>
        </LayoutAdmin>
    )
}
