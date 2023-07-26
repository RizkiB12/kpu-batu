import { Button, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import ImageJumbotron from '../../../assets/images/jumbotron.jpg'


function Jumbo() {
  return (
    <>
         <Jumbotron>
                <WrapTitleJumbotron>
                    <TitleJumbotron>Badan Adhoc KPU Kota Batu</TitleJumbotron>
                    <SubtitleJumbotron><Button>Getting Started</Button></SubtitleJumbotron>
                </WrapTitleJumbotron>
            </Jumbotron>

    </>
  )
}

export default Jumbo

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