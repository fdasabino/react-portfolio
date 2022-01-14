import emailjs from '@emailjs/browser'
import './contact.scss'
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'
import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_6pcnbro',
        'template_gxhlmdb',
        formRef.current,
        'user_CohGKIqjoqB7yATeEglvy',
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div className="c" id="contact">
      <div className="c-bg" />
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Want to help with a new project?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone" className="c-icon" />
              <p className="c-info-item-text">+46762416529</p>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="email" className="c-icon" />
              <p className="c-info-item-text">fdasabino@gmail.com</p>
            </div>
            <div className="c-info-item">
              <img src={Address} alt="address" className="c-icon" />
              <p className="c-info-item-text">
                Hildebrandsvägen 20A <br /> Bromma, 16856 <br /> Stockholm
                <br /> Sweden
              </p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. I'm available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            <div className="c-done">
              <br />
              {done && 'Thank you for your message!'}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
