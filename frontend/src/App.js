import React, { Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import './Styles/Pages.css'

import Header from './Components/Global/Header'
import Routes from './Components/Routes'
import Footer from './Components/Global/Footer'

const App = () => {
  return (
    <Fragment>
      <div className="main-container">
        <Header />
        <div className="main-content">
          <Routes />
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default App
