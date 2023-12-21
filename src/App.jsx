import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import ScrollToTop from './components/Options/ScrollToTop'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <ScrollToTop/>
      <Navbar/>
      <Home/>
      {/* <About/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App