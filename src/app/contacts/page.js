import React from 'react'
import ContactsComp from './ContactsComp'
import Title from '../components/Title'
import AboutBg from '../components/AboutBg'

export const metadata = {
    title: "Contacts",
    description: "Generated by create next app",
};

export default function Contacts() {
    return (
        <div>
            <Title />
            <ContactsComp />
            <AboutBg />
        </div>
    )
};