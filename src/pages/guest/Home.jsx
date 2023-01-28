import React from 'react'
import Hero from '../../components/guest/Hero'
import Navbar from '../../components/guest/Navbar'
import News from '../../components/guest/News'
import NewsTwo from '../../components/guest/NewsTwo'
import NewsThree from '../../components/guest/NewsThree'
import Cards from '../../components/guest/Cards'
import Form from '../../components/guest/Form'
import Faq from '../../components/guest/Faq'
import Footer from '../../components/guest/Footer'


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <News />
            <NewsTwo />
            <NewsThree />
            <Cards />
            <Form />
            <Faq />
            <Footer />
        </div>
    )
}


export default Home