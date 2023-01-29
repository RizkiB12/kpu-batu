import { Col, Grid, Image, Row, Typography } from 'antd'
import React from 'react'
import ImageJumbotron from '../../../assets/images/jumbotron.jpg'
const { Title } = Typography

const News = () => {

    const { xs, sm, md, lg } = Grid.useBreakpoint()



  return (
    <>
           <Row justify='center' style={{ paddingTop: '30px' }}>
                <Col xs={24} lg={18}>
                    <Row>
                        <Col md={24} lg={12} style={{ textAlign: 'center', padding: '2vh 5vh 2vh 5vh' }}>
                            <Row span={24} style={{ height: '350px', overflow: 'hidden' }}>
                                <Image src={ImageJumbotron} preview={false} />
                            </Row>
                        </Col>
                        <Col md={24} lg={12} style={{ textAlign: 'center', padding: '2vh 5vh 2vh 5vh', }}>
                            <Title level={3} style={{ textAlign: 'start', marginTop: `${(xs || sm || md || lg) ? '10px' : '5vh'}` }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequuntur?</Title>
                            <Title level={5} style={{ textAlign: 'start' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequuntur?</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col order={lg ? 0 : 2} md={24} lg={12} style={{ textAlign: 'center', padding: '2vh 5vh 2vh 5vh', }}>
                            <Title level={3} style={{ textAlign: 'start', marginTop: `${(xs || md || lg) ? '10px' : '5vh'}` }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequuntur?</Title>
                            <Title level={5} style={{ textAlign: 'start' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequuntur?</Title>
                        </Col>
                        <Col md={24} lg={12} style={{ textAlign: 'center', padding: '2vh 5vh 2vh 5vh' }}>
                            <Row span={24} style={{ height: '350px', overflow: 'hidden' }}>
                                <Image src={ImageJumbotron} preview={false} />
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                    <Col md={24} lg={12} style={{ textAlign: 'center', padding: '2vh 5vh 2vh 5vh' }}>
                            <Row span={24} style={{ height: '350px', overflow: 'hidden' }}>
                                <Image src={ImageJumbotron} preview={false} />
                            </Row>
                        </Col>
                        <Col md={24} lg={12} style={{ textAlign: 'center', padding: '2vh 5vh 2vh 5vh', }}>
                            <Title level={3} style={{ textAlign: 'start', marginTop: `${(xs || sm || md || lg) ? '10px' : '5vh'}` }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequuntur?</Title>
                            <Title level={5} style={{ textAlign: 'start' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequuntur?</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col order={lg ? 0 : 2} md={24} lg={12} style={{ textAlign: 'center', padding: '2vh 5vh 2vh 5vh', }}>
                            <Title level={3} style={{ textAlign: 'start', marginTop: `${(xs || md || lg) ? '10px' : '5vh'}` }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequuntur?</Title>
                            <Title level={5} style={{ textAlign: 'start' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, consequuntur?</Title>
                        </Col>
                        <Col md={24} lg={12} style={{ textAlign: 'center', padding: '2vh 5vh 2vh 5vh' }}>
                            <Row span={24} style={{ height: '350px', overflow: 'hidden' }}>
                                <Image src={ImageJumbotron} preview={false} />
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </>
  )
}

export default News