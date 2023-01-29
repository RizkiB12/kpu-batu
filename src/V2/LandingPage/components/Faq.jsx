import { Col, Collapse, Row, Typography } from 'antd'
import React from 'react'
const { Panel } = Collapse
const { Title } = Typography

const text = `https://bit.ly/3kF4K0R`;


const Faq = () => {
  return (
    <>
         <Row justify='center' style={{ padding: '50px 0 50px 0' }}>
                <Col xs={24}>
                    <Row justify='center' style={{ textAlign: 'center' }}>
                        <Col>
                            <Title level={4}>Lorem ipsum dolor sit.</Title>
                            <Title style={{ marginTop: '10px' }} level={1}>Frequently Ask Question</Title>
                        </Col>
                    </Row>
                    <Row justify='center' style={{ marginTop: '20px' }}>
                        <Col xs={20} lg={18}>
                            <Collapse defaultActiveKey={['1']}>
                                <Panel header="Bagaimana cara menjadi bagian dari badan adhoc?" key="1">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="Apa saja persyaratan yang dibutuhkan untuk menjadi badan adhoc?" key="2">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="Berapa lama masa kerja menjadi badan adhoc?" key="3">
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </>
  )
}

export default Faq