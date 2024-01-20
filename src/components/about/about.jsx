import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
export default function About() {
  const [index, setIndex] = useState(0)
  const images = ["./me3.jpg", "./hero.jpg", "./me.jpg"];

  function nextSlide() {
    index < images.length - 1 ? setIndex(index + 1) : setIndex(0)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div className="about-section">
      <h1 className="title">About</h1>
      <div className="about-style">
        <div className="about-img">
          <img src={images[index]} alt="" className='f-img' />
        </div>
        <div className="about-social">
          <h6 className='follow-title'>Follow Me</h6>
          <div className="facebook social">
            <FontAwesomeIcon icon={faFacebook} className='social-icon' />
            <span className='social-text'>Follow Me on Facebook</span>
          </div>
          <div className="twitter social">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <span className="social-text">Follow Me on Twitter</span>
          </div>
          <div className="instagram social">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <span className="social-text">Follow Me on Instagram</span>
          </div>
          <div className="github social">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
            <span className="social-text">Follow Me on Github</span>
          </div>
          <div className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <span className="social-text">Follow Me on Linkedin</span>
          </div>
          <div className="email social">
            <FontAwesomeIcon icon={faSquareEnvelope} className="social-icon" />
            <span className="social-text">Email Me</span>
          </div>
        </div>

      </div>
      <div className="about-description">
        <h2 className="about-title">I'm Abdo Mohamed Ahmed </h2>
        <h4 className="about-subtitle">Full Stack Web Developer & UI/UX Designer</h4>

        <p className="about-text">
          I am a Full Stack Web Developer. I am passionate about creating
          responsive websites using HTML, CSS, JavaScript, React, Node.js,
          and MongoDB. I have experience working with various web development
          technologies such as React, Node.js, and MongoDB.
        </p>
        <p className="about-text">
          I am a Full Stack Web Developer. I am passionate about creating
          responsive websites using HTML, CSS, JavaScript, React, Node.js,
          and MongoDB. I have experience working with various web development
          technologies such as React, Node.js, and MongoDB.
        </p>
        <p className="about-text">
          I am a Full Stack Web Developer. I am passionate about creating
          responsive websites using HTML, CSS, JavaScript, React, Node.js,
          and MongoDB. I have experience working with various web development
          technologies such as React, Node.js, and MongoDB.
        </p>
        <p className="about-text">
          I am a Full Stack Web Developer. I am passionate about creating
          responsive websites using HTML, CSS, JavaScript, React, Node.js,
          and MongoDB. I have experience working with various web development
          technologies such as React, Node.js, and MongoDB.
        </p>
        <p className="about-text">
          I am a Full Stack Web Developer. I am passionate about creating
          responsive websites using HTML, CSS, JavaScript, React, Node.js,
          and MongoDB. I have experience working with various web development
          technologies such as React, Node.js, and MongoDB.
        </p>
      </div>
    </div>
  )
}
