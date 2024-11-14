'use client'
import React from 'react';
import TEAM from '@/app/utils/team';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useParams } from 'next/navigation';
import TitleTeam from '@/app/components/TitleTeam';
import AboutBg from '@/app/components/AboutBg';

export default function TeamDetail() {
    const { id } = useParams();  // Получаем ID из маршрута
    const teamMember = TEAM.find(member => member.id === parseInt(id)); // Находим данные члена команды по ID

    return (
        <>
            <TitleTeam />
            <div className="teamdet">
                {teamMember ? (
                    <div className='teamdet-blok'>
                        <div className='teamdet-blok__section-1'>
                            <img src={teamMember.image} alt={teamMember.name} />
                        </div>
                        <div className='teamdet-blok__section-2'>
                            <div className='teamdet-blok__section-part-1'>
                                <h1>{teamMember.name}</h1>
                                <b>{teamMember.job}</b>
                                <div className='teamdet__div'></div>
                            </div>
                            <div className='teamdet-blok__section-part-2'>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                <br />
                                <br />
                                <p>Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
                            </div>
                            <div className='teamdet-blok__section-part-3'>
                                <a href=''><FaLinkedinIn className='teamdet__icon' /></a>
                                <a href=''><FaTwitter className='teamdet__icon' /></a>
                                <a href=''><FaYoutube className='teamdet__icon' /></a>
                                <a href=''><FaFacebookF className='teamdet__icon' /></a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Member not found</div>
                )}
            </div>
            <AboutBg />
        </>
    );
};