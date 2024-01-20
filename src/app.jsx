import Header from './components/header/header'
import Hero from './components/hero/hero'
import Content from './components/content/content'
import Contact from './components/contact/contact'
import About from './components/about/about'
import Footer from './components/footer/footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import backToTop from '../public/animations/back-to-top.json'

library.add(fab, far, fas)

export function App() {

  const [backToTopBtn, setBackToTopBtn] = useState(false)

  useEffect(() => {
    const handelScroll = () => {
      window.pageYOffset > 300 ? setBackToTopBtn(true) : setBackToTopBtn(false);
      // console.log(window.pageYOffset)
    }
    addEventListener('scroll', handelScroll)
    return () => { removeEventListener('scroll', handelScroll) }
  }, [backToTopBtn])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // backToTopBtn && addEventListener('click', scrollToTop)

  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="container">
        <Header />
        <Hero />
        <Content />
        <Contact />
        <About />
        <Footer />

      </div>
        {backToTopBtn &&
          <button className="back-to-top" onClick={scrollToTop} >
            <Lottie animationData={backToTop} loop={true} />
          </button>
        }
    </>

  )
}
