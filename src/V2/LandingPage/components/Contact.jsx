import { Col, Input, Grid, Row, Typography } from 'antd'
import React from 'react'
const { Title } = Typography
const { Search } = Input



const Contact = () => {
    const { xs,  lg } = Grid.useBreakpoint()
  return (
    <>          
    
            <Row justify='center' style={{ backgroundColor: '#001529', padding: '100px 0 100px 0', marginTop: '20px' }}>
                <Col span={24}>
                    <Row justify='center'>
                        <Col xs={24} lg={18}>
                            <Row justify='space-between'>
                                <Col xs={24} md={16}>
                                    <Row justify={`${lg ? 'start' : 'center'}`}>
                                        <Col span={18}>
                                            <Title level={2} style={{ color: 'white' }}>Want to optimize your information?</Title>
                                            <Title level={5} style={{ color: 'white' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, corrupti iste dicta dolore veniam cumque?</Title>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Row justify='center' style={{ marginTop: `${xs ? '20px' : '0'}` }}>
                                        <Col span={18}>
                                            <Search
                                                enterButton="Send"
                                                size="large"
                                            />
                                            <Title level={5} style={{ color: 'white', marginTop: '20px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, ab?</Title>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </>

  )
}

export default Contact