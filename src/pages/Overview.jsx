import React from 'react'
import LayoutAdmin from '../components/admin/LayoutAdmin'
import { Button, Card, Col, Row, Statistic } from 'antd';
import { Divider } from 'antd';

export function Overview() {
    const breadcumb = [
        {
            name: 'Overview',
            link: '/overview',
        },
    ];

    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };
    return (
        <LayoutAdmin breadcumb={breadcumb}>
            <div>
                <h1>Statistics</h1>
            </div>
            <Row gutter={16}>
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
            <div>
                <h1>Employees</h1>
            </div>
            <Divider orientation="left">Responsive</Divider>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
        </LayoutAdmin>
    )
}
