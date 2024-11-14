import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

export default function HeaderComp() {
    return (
        <div className='header'>
            <div className="header-blok">
                <div className="header-blok__section-1">
                    <h1>Creativity In Our Blood Line</h1>
                </div>
                <div className="header-blok__section-2">
                    <div className="header-blok__section-part">
                        <Link href="/contacts">
                            <p>Get a Quote</p>
                            <BsArrowRight className='header-blok__section-part__icon' />
                        </Link>
                    </div>
                    <p className='header-blok__section-part__p'>We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future.</p>
                </div>
            </div>
        </div>
    )
};