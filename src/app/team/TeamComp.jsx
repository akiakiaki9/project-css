'use client';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TEAM from '../utils/team';
import { FaLinkedinIn, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import Link from 'next/link';

export default function TeamComp() {
    const teamMembers = [...TEAM, ...TEAM]; // Для бесконечной карусели (дублируем элементы)

    const [isHolding, setIsHolding] = useState(false); // Состояние для отслеживания удержания

    // Обработчик события для начала удержания
    const handleTouchStart = () => {
        setIsHolding(true);
    };

    // Обработчик события для окончания удержания
    const handleTouchEnd = () => {
        setIsHolding(false);
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4, // Увеличиваем количество элементов на больших экранах
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3, // Больше элементов на экранах среднего размера
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2, // Меньше элементов на планшетах
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1, // 1 элемент на мобильных устройствах
        },
    };

    return (
        <div className="team">
            <div className="team-blok">
                <div className="team-blok__section">
                    <p>Our Team</p>
                    <h1>Awesome Team Members</h1>
                </div>
                <div className="team-blok__section">
                    <Carousel
                        responsive={responsive}
                        infinite={true} // Зацикливание
                        autoPlay={false} // Отключаем автопрокрутку
                        swipeable={!isHolding} // Разрешаем свайп только если не удерживаем картинку
                        draggable={true} // Разрешаем перетаскивание
                        arrows={true} // Включаем стрелки для навигации
                    >
                        {teamMembers.map((team) => (
                            <div key={team.id} className="team-member">
                                <Link href={`/team/${team.id}`}>
                                    <img
                                        src={team.image}
                                        alt={team.name}
                                        onTouchStart={handleTouchStart} // Отслеживаем начало удержания
                                        onTouchEnd={handleTouchEnd} // Отслеживаем окончание удержания
                                        onMouseDown={handleTouchStart} // То же для мыши
                                        onMouseUp={handleTouchEnd} // То же для мыши
                                    />
                                </Link>
                                <div className="social-icons">
                                    <FaLinkedinIn className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaYoutube className='social-icon' />
                                    <FaFacebookF className='social-icon' />
                                </div>
                                <div className="team-member-info">
                                    <h3>{team.name}</h3>
                                    <p>{team.job}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};