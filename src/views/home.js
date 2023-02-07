import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Usability Architect</title>
        <meta property="og:title" content="Regional Usability Architect" />
      </Helmet>
    </div>
  )
}

export default Home
