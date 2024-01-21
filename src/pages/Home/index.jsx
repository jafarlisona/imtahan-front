import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutTasty from '../../components/AboutTasty'
import Comments from '../../components/Comments'
import OurMenu from '../../components/OurMenu'
import SliderHeader from '../../components/SliderHeader'
import Blog from '../../components/Blog'

function Home() {
  return (
    <>
      <Helmet>
        <title>Tasty Home Page</title>
      </Helmet>
      <SliderHeader />
      <AboutTasty />
      <OurMenu />
      <Comments />
      <Blog/>
    </>
  )
}

export default Home