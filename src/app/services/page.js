import React from 'react'
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import AboutBg from '../components/AboutBg'
import Title from '../components/Title'
import PriceList from '../components/pricelist/pricelist'

export const metadata = {
    title: "Services",
    description: "Generated by create next app",
};

export default function Services() {
    return (
        <div>
            <Title />
            <div className='services1'>
                <div className="services-blok">
                    <div className="services-blok__section services-blok__section-1">
                        <p>What Can We Do</p>
                        <h1>Services we can help you with</h1>
                        <div className="services-blok__section-part">
                            <Link href="/services">
                                <p>See All Services</p>
                                <BsArrowRight className='services-blok__section-part__icon' />
                            </Link>
                        </div>
                    </div>
                    <div className="services-blok__section services-blok__section-2">
                        <div className="services-blok__section__container services-blok__section__container-1">
                            <div className="services-blok__section__container-part services-blok__section__container-part-1">
                                <div className='services__dot'></div>
                                <p>Service UI/UX design</p>
                            </div>
                            <div className="services-blok__section__container-part services-blok__section__container-part-2">
                                <div className='services__dot'></div>
                                <p>React.js Development</p>
                            </div>
                        </div>
                        <div className="services-blok__section__container services-blok__section__container-2">
                            <div className="services-blok__section__container-part services-blok__section__container-part-3">
                                <div className='services__dot'></div>
                                <p>Digital Marketing</p>
                            </div>
                            <div className="services-blok__section__container-part services-blok__section__container-part-4">
                                <div className='services__dot'></div>
                                <p>Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBg />
            <PriceList />
        </div>
    )
};