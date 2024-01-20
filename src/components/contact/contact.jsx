import React from 'react'
import Lottie from 'lottie-react'
import contactAnimation from '../../../public/animations/Animation - 2.json'
import './contact.css'
import doneAnimation from '../../../public/animations/done.json'
import { useRef } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState('Send')
  const [done, setDone] = React.useState(false)
  const LottieRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Sending...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    console.log(conFom)
    setFormStatus('Sent!')
    e.target.reset()
    setDone(true)

    setTimeout(() => {
      setFormStatus('Send')
      setDone(false)
    }, 5000)
  }
  return (
    <div className="contact-us">
      <h1 className="title">Contact Us</h1>
      <span className="descrispantion">We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.</span>
      <form onSubmit={onSubmit} className='form' method='POST'>
        <div className='form-control'>
          <label htmlFor="name" className='label'>Name</label>
          <input type="text" id="name" className='input' required />
        </div>
        <div className='form-control'>
          <label htmlFor="email" className='label'>Email</label>
          <input type="email" id="email" className='input' required />
        </div>
        <div className='form-control'>
          <label htmlFor="message" className='label'>Message</label>
          <textarea id="message" className='input' required />
        </div>
        <button type='submit' className='btn'>{formStatus}</button>
      </form>
      <div className="send-logo">
        <Lottie animationData={contactAnimation} loop={true} className='send-icon' LottieRef={LottieRef}
          onLoadedImages={() => LottieRef.current.setSpeed(0.5)} />
      </div>
      <div className="done">
        {done && <p className='done-text'>
          <Lottie animationData={doneAnimation} loop={true} className='done-icon' />
          <span className='done-text-span'> Thank you for contacting me - I'll get back to you!</span>
        </p>}
      </div>
    </div>

  )
}
