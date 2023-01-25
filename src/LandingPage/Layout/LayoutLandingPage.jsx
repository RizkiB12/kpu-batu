import { Col, Layout, Row, Typography } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../../redux/slice/AuthSlice'
import { YoutubeOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const { Header } = Layout
const { Title } = Typography


const LayoutLandingPage = (props) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {authUser} = useSelector(state => state.authUser)
  
  const handleLogout = () => {
      console.log('clicked');
      dispatch(logout())
      navigate('/')

  }

  const handleLogin = () => {
      navigate('/login')
  }


  return (
    <>
        <Header style={{ color: 'white', position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%', }}>
                <WrapNavbar justify='space-between'>
                    <Col>
                        BADAN ADHOC
                    </Col>
                    <Col>
                        <Row justify='space-between' gutter={16}>
                            <Col style={{
                                cursor: 'pointer'}} >Home</Col>
                            <Col style={{
                                cursor: 'pointer'}} >News</Col>
                            <Col style={{
                                cursor: 'pointer'}} 
                                onClick={authUser === null ? () => handleLogin() : () => handleLogout()}>{authUser === null ? 'Login' : 'Logout'}</Col>
                        </Row>
                    </Col>
                </WrapNavbar>
            </Header>

            {props.children}

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

export default LayoutLandingPage

const WrapNavbar = styled(Row)`
    @media (min-width: 768px) {
        margin: 0 10vh 0 10vh;
    }
`