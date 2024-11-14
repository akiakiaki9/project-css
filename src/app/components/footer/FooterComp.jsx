'use client'
import React from 'react'
import { FaLinkedinIn, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function FooterComp() {
    return (
        <div className='footer' >
            <div className="footer-blok">
                <div className="footer-blok__section footer-blok__section-1">
                    <img src="/images/brand.svg" alt="" />
                    <p>Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.</p>
                    <div className="footer-blok__section__container">
                        <a href=""><FaLinkedinIn className='footer__icon' /></a>
                        <a href=""><FaTwitter className='footer__icon' /></a>
                        <a href=""><FaYoutube className='footer__icon' /></a>
                        <a href=""><FaFacebookF className='footer__icon' /></a>
                    </div>
                </div>
                <div className="footer-blok__section footer-blok__section-2">
                    <div className="footer-blok__section-part">
                        <p className='footer-blok__section-part-p'>Services</p>
                        <p><a href="">UI/UX design</a></p>
                        <p><a href="">WP development</a></p>
                        <p><a href="">Digital Marketing</a></p>
                        <p><a href="">Next Development</a></p>
                    </div>
                    <div className="footer-blok__section-part">
                        <p className='footer-blok__section-part-p'>Contact Us</p>
                        <p><a href="tel:+44 454 7800 112">+44 454 7800 112</a></p>
                        <p>infotech@arino.com</p>
                        <p>50 Wall Street Suite, 44150</p>
                        <p>Ohio, United States</p>
                    </div>
                </div>
                <div className="footer-blok__section footer-blok__section-3">
                    <p className='footer-blok__section-part-p'>Subscribe</p>
                    <form className="footer-blok__section-form">
                        <input type="email" required/>
                        <button type='submit'>Send</button>
                    </form>
                    <p>At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.</p>
                </div>
            </div>
            <div className="footer-footer">
                <div className="footer-footer-blok">
                    <div className="footer-footer-blok__section">
                        <p>Copyright © 2022 Laralink.</p>
                    </div>
                    <div className="footer-footer-blok__section">
                        <p><a href="">Terms of Use</a></p>
                        <div className='footer-footer__div'></div>
                        <p><a href="">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};