'use client'
import React from 'react'
import Link from 'next/link';

export default function TitleTeam() {

    return (
        <div className='pagename'>
            <div className="pagename-blok">
                <h1>Team Detail</h1>
                <p>
                    <Link href="/" className='pagename-parent'>Home</Link>
                    <span className='pagename-drop'>/</span>
                    <span className='pagename-child'>Team Detail</span>
                </p>
            </div>
        </div>
    )
};