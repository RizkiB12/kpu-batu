import { Layout, Row, Col, Image, Typography, Grid, Input, Collapse } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ImageJumbotron from '../assets/images/jumbotron.jpg'
import { logout } from '../redux/slice/AuthSlice'
import { YoutubeOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const { Header } = Layout
const { Title } = Typography
const { Search } = Input
const { Panel } = Collapse

const LandingPage = () => {

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



    const { xs, sm, md, lg } = Grid.useBreakpoint()
    const text = `
    https://drive.google.com/drive/folders/1ieaYMvgWTkx1uLJPZucwoBO_poueYztj?usp=share_link
        `;
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

            <Jumbotron>
                <WrapTitleJumbotron>
                    <TitleJumbotron>Badan Adhoc KPU Kota Batu</TitleJumbotron>
                    <SubtitleJumbotron>This is subtitle jumbotron</SubtitleJumbotron>
                </WrapTitleJumbotron>
            </Jumbotron>

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

            <Row justify='center' style={{ padding: '50px 0 50px 0', backgroundColor: '#001529', color: 'white' }}>
                <Col xs={24}>
                    <Row justify='center'>
                        <Col xs={20} lg={18}>
                            <Row justify='center'>
                                <Col style={{ margin: '10px 0 10px 0' }} xs={24} lg={6}>
                                    <Title style={{ color: 'white' }} level={4}>Adress</Title>
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
                                        <p style={{ fontSize: '25px', marginRight: '5px' }}><YoutubeOutlined /></p>
                                        <p style={{ fontSize: '25px', marginRight: '5px'  }} ><FacebookOutlined /></p>
                                        <p style={{ fontSize: '25px', marginRight: '5px' }} ><InstagramOutlined /></p>
                                        <p style={{ fontSize: '25px' }} ><TwitterOutlined /></p>
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

export default LandingPage

const WrapNavbar = styled(Row)`
    @media (min-width: 768px) {
        margin: 0 10vh 0 10vh;
    }
`

const Jumbotron = styled(Row)`
    height: 30vh;
    @media (min-width: 768px) {
        height: 60vh;
    }
    background-image: linear-gradient(rgba(27, 32, 75, 0.5),#d2d2d2), url(${ImageJumbotron});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WrapTitleJumbotron = styled.div`
    text-align: center;
    @media (min-width: 768px) {
        line-height: 50px;
    }
`

const TitleJumbotron = styled.h1`
    color: #ffffff;
    @media (min-width: 768px) {
        font-size: 72px;
    }
`

const SubtitleJumbotron = styled.h1`
    color: #ffffff;
    font-size: 16px;
    @media (min-width: 768px) {
        font-size: 42px;
    }
`