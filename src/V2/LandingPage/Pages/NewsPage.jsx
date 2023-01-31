import React from 'react'
import HeaderNews from '../components/HeaderNews'
import NewsCard from '../components/NewsCard'
import LayoutLandingPage from '../Layout/LayoutLandingPage'

const NewsPage = () => {
  return (
    <>
        <LayoutLandingPage>
            <HeaderNews />
            <NewsCard />
        </LayoutLandingPage>
    </>
  )
}

export default NewsPage