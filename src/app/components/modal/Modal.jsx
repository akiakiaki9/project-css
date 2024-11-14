'use client'
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { TbMenuDeep } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";

export default function Modal({ isMobile }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            {isMobile ? (
                <button onClick={openModal} className="modal__button"><RiContactsFill className='modal__button-icon' />Contacts</button>
            ) : (
                <TbMenuDeep onClick={openModal} className='modal__icon' />
            )}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};