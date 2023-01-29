import React from 'react'
import LayoutLandingPage from '../Layout/LayoutLandingPage'
import Jumbotron from '../components/Jumbotron'
import News from '../components/News'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

function LandingPage() {
  return (
    <>
      <LayoutLandingPage>
        <Jumbotron />
        <News />
        <Contact/>
        <Faq />
      </LayoutLandingPage>
    </>
  )
}

export default LandingPage