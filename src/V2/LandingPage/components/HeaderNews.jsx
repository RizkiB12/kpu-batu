import { Col, Row, Typography } from 'antd'
import React from 'react'
const { Title } = Typography

function HeaderNews() {
  return (
    <Row justify='center' style={{ padding: '50px 0 50px 0' }}>
        <Col xs={24}>
            <Row justify='center' style={{ textAlign: 'center' }}>
                <Col>
                    <Title level={3}>Berita dan Acara Badan Adhoc</Title>
                </Col>
            </Row>
        </Col>
    </Row>
  )
}

export default HeaderNews