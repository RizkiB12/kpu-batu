import { Col, Layout ,Row } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../../redux/slice/AuthSlice'
const { Header } = Layout

const Navbar = () => {

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
    </>
  )
}

export default Navbar

const WrapNavbar = styled(Row)`
    @media (min-width: 768px) {
        margin: 0 10vh 0 10vh;
    }
`