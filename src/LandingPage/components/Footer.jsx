import { Col,  Row, Typography } from 'antd'
import React from 'react'
import { YoutubeOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const { Title } = Typography


const Footer = () => {

  

  return (
    <>
        <Row justify='center' style={{ padding: '50px 0 50px 0', backgroundColor: '#001529', color: 'white' }}>
                <Col xs={24}>
                    <Row justify='center'>
                        <Col xs={20} lg={18}>
                            <Row justify='center'>
                                <Col style={{ margin: '10px 0 10px 0' }} xs={24} lg={6}>
                                    <Title style={{ color: 'white' }} level={4}>Address</Title>
                                    <p>Jl. Sultan Agung No.16, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65314</p>
                                </Col>
                                <Col style={{ margin: '10px 0 10px 0' }} xs={24} lg={6}>
                                    <Title style={{ color: 'white' }} level={4}>Contact</Title>
                                    <p>info@kpu.com</p>
                                    <p>kpu.batu@kpu.ac.id</p>
                                </Col>
                                <Col style={{ margin: '10px 0 10px 0' }} xs={24} lg={6}>
                                    <Title style={{ color: 'white' }} level={4}>Follow Us</Title>
                                    <Row>
                                        <p style={{ fontSize: '25px', marginRight: '5px'  }} ><FacebookOutlined /></p>
                                        <p style={{ fontSize: '25px', marginRight: '5px' }} ><InstagramOutlined /></p>
                                        <p style={{ fontSize: '25px', marginRight: '5px' }} ><TwitterOutlined /></p>
                                        <p style={{ fontSize: '25px'}}><YoutubeOutlined /></p>
                                    </Row>
                                </Col>
                                <Col style={{ margin: '10px 0 10px 0' }} xs={24} lg={6}>
                                    <Title style={{ color: 'white' }} level={4}>Other</Title>
                                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, odio. Assumenda repudiandae nostrum sit! Obcaecati?</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

    </>
  )
}

export default Footer