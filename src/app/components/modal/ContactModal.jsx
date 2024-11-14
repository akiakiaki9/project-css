'use client'
import React, { useEffect, useState } from 'react';
import { CgCloseO } from "react-icons/cg";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function ContactModal({ isOpen, onClose }) {

  const [visible, setVisible] = useState(false);

  // Плавное открытие модального окна
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 100); // Задержка перед скрытием
    }
  }, [isOpen]);

  // Обработчик клика вне модального окна
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <>
      {visible && (
        <div
          className={`modal-overlay ${isOpen ? 'fade-in' : 'fade-out'}`}
          onClick={handleOverlayClick}
        >
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>
              <CgCloseO className='modal-close__icon' />
            </button>
            <div className="modal-body">
              <img src="/images/brand.svg" alt="Brand" />
              <p className='modal-body__p1'>Do you have a project in your mind? Keep connect us.</p>
              <p className='modal-body__p2'>Contact Us</p>
              <div className="modal-body__container">
                <div className="modal-body__container-part">
                  <BsFillTelephonePlusFill className='modal-body__container-part__icon' />
                  <p><a href="tel:+44 454 7800 112">+44 454 7800 112</a></p>
                </div>
                <div className="modal-body__container-part">
                  <IoMail className='modal-body__container-part__icon' />
                  <p>infotech@arino.com</p>
                </div>
                <div className="modal-body__container-part">
                  <IoLocationSharp className='modal-body__container-part__icon' />
                  <p>50 Wall Street Suite, 44150 Ohio, United States</p>
                </div>
              </div>
              <p className='modal-body__p3'>Subscribe</p>
              <form>
                <input type="email" placeholder='example@gmail.com' required />
                <button type='submit'>Send</button>
              </form>
              <p className='modal-body__p4'>At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.</p>
              <div className="modal-body__footer">
                <a href="https://t.me/akbarsoftowner"><BsTelegram className='modal-body__footer-icon' /></a>
                <a href="https://youtube.com/zuck"><FaYoutube className='modal-body__footer-icon' /></a>
                <a href="htts://instagram.com/zuck"><RiInstagramFill className='modal-body__footer-icon' /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};