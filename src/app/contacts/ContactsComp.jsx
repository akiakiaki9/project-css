import React from 'react'
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import GoogleMap from '../components/GoogleMaps';

export default function ContactsComp() {
  return (
    <>
      <div className='contacts'>
        <div className="contacts-blok">
          <div className="contacts-blok__section-1">
            <div className='contacts-blok__section-1__div'>
              <p>Getting Touch</p>
              <h1>Do you have a project in your mind?</h1>
            </div>
            <div className="contacts-blok__section__container-parent">
              <div className="contacts-blok__section__container">
                <BsFillTelephonePlusFill className='contacts__icon' />
                <p><a href="tel:+44 454 7800 112">+44 454 7800 112</a></p>
              </div>
              <div className="contacts-blok__section__container">
                <MdEmail className='contacts__icon' />
                <p>infotech@arino.com</p>
              </div>
              <div className="contacts-blok__section__container">
                <FaLocationDot className='contacts__icon' />
                <p>50 Wall Street Suite, 44150 Ohio, United States</p>
              </div>
            </div>
          </div>
          <div className="contacts-blok__section-2">
            <form className="contacts-blok__form">
              <div className="contacts-blok__form__section">
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="">Full Name*</label>
                  <input type="text" required minLength={3} />
                </div>
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="">Email*</label>
                  <input type="email" required />
                </div>
              </div>
              <div className="contacts-blok__form__section">
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="">Project Type*</label>
                  <input type="text" required minLength={5} />
                </div>
                <div className="contacts-blok__form__section-div">
                  <label htmlFor="">Phone*</label>
                  <input type="tel" required minLength={12} />
                </div>
              </div>
              <div className="contacts-blok__form__section">
                <div className='contacts-blok__form__section-div'>
                  <label htmlFor="">Message*</label>
                  <textarea name="" id="" required minLength={10} maxLength={100}></textarea>
                </div>
              </div>
              <button type='submit'>
                <p>Send Message</p>
                <MdOutlineArrowRightAlt />
              </button>
            </form>
          </div>
        </div>
      </div>
      <GoogleMap />
    </>
  )
};