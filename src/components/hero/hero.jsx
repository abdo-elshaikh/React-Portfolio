import React from 'react'
import './hero.css'
import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import heroAnimation from "../../../public/animations/Animation - 3.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="left-section">
        <div className="picture">
          <img src="./a1.png" alt="hero" />
          <div className="circle">
            <FontAwesomeIcon icon={faCertificate} className='certificate' />
            <FontAwesomeIcon icon={faCheck} className='check' />
          </div>
        </div>
        <div className="information">
          <h2>
            Hello, I'm <br />
            <span>Abdelrahman Mohamed Ahmed</span>
          </h2>
          <h4>
            - <span>"Full Stack Developer"</span> based in BNS, Egypt.
          </h4>
          <p>
            I am a passionate and result-driven Full Stack Developer with a keen interest in crafting robust and scalable web
            applications. <br />My journey in the world of software development began with
            a fascination for problem-solving and a deep-rooted curiosity for technology.

          </p>
          <button className='download-btn'>Download Resume</button>
        </div>
      </div>
      <div className="right-section">
        <Lottie animationData={heroAnimation} loop={true} className='hero-animation' />
      </div>
    </div>
  )
}
