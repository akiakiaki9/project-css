'use client'
import React, { useState } from 'react';
import PORTFOLIO from '../utils/portfolio';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

export default function PortfolioComp() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Design', 'UX/UI Design', 'Mobile Apps', 'Logo Design'];

  // Фильтруем портфолио и удаляем дубликаты
  const filteredPortfolio = activeCategory === 'All'
    ? [...new Set(PORTFOLIO.map(item => item.image))].map(image => PORTFOLIO.find(item => item.image === image))
    : [...new Set(PORTFOLIO.filter(item => item.category === activeCategory).map(item => item.image))]
      .map(image => PORTFOLIO.find(item => item.image === image));

  return (
    <>
      <div className='portfolio'>
        <div className="portfolio-blok">
          <div className="portfolio-blok__section-1">
            <div className="portfolio-blok__section-1-part-1">
              <p>Our Portfolio</p>
              <h1>Some Recent Work</h1>
            </div>
            <div className="portfolio-blok__section-1-part-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-button ${activeCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
              <div className="category-underline">
                <span
                  className="category-dot"
                  style={{ left: `${categories.indexOf(activeCategory) * 100 / categories.length}%` }}
                />
              </div>
            </div>
          </div>
          <div className="portfolio-blok__section-2">
            {filteredPortfolio.map(item => (
              <div key={item.id} className={`portfolio-item ${item.size}`}>
                <img src={item.image} alt={item.category} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='aboutbg'>
        <div className="aboutbg-blok">
          <p className='aboutbg-blok-p' style={{fontSize: '200%'}}>agency@arino.com</p>
          <div className="aboutbg-blok__section">
            <Link href="/contacts"><p className='aboutbg-blok__section-p'>Apply For Meeting</p></Link>
            <FaArrowRightLong className='aboutbg__icon' />
          </div>
        </div>
      </div>
    </>
  );
}
