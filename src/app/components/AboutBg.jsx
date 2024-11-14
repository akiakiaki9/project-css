import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutBg() {
    return (
        <div className='aboutbg'>
            <div className="aboutbg-blok">
                <p className='aboutbg-blok-p'>Let’s disscuse make something <span>cool</span> together</p>
                <div className="aboutbg-blok__section">
                    <Link href="/contacts"><p className='aboutbg-blok__section-p'>Apply For Meeting</p></Link>
                    <FaArrowRightLong className='aboutbg__icon' />
                </div>
            </div>
        </div>
    )
};