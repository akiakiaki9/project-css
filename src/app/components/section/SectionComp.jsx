import React from 'react'

export default function SectionComp() {
  return (
    <div className='section'>
      <div className="section-blok">
        <div className="section-blok__section section-blok__section-1">
          <b>Our Awards</b>
          <h1>We get multiple awards</h1>
        </div>
        <div className="section-blok__section section-blok__section-2">
          <div className="section-blok__section__container section-blok__section__container-1">
            <div className="section-blok__section__container-part">
              <p className='section-blok__section__container-part-p1'>2019</p>
              <p className='section-blok__section__container-part-p2'>Google awards</p>
              <p className='section-blok__section__container-part-p3'>Web of the day</p>
              <p className='section-blok__section__container-part-p3'>Mobile exelence</p>
            </div>
            <div className="section-blok__section__container-part">
              <p className='section-blok__section__container-part-p1'>2020</p>
              <p className='section-blok__section__container-part-p2'>New technology innovation</p>
              <p className='section-blok__section__container-part-p3'>Honorable mention</p>
              <p className='section-blok__section__container-part-p3'>Desktop exelence</p>
            </div>
          </div>
          <div className="section-blok__section__container">
            <div className="section-blok__section__container-part">
              <p className='section-blok__section__container-part-p1'>2021</p>
              <p className='section-blok__section__container-part-p2'>CSS awards design</p>
              <p>Honorable mention</p>
              <p>Desktop exelence</p>
            </div>
            <div className="section-blok__section__container-part">
              <p className='section-blok__section__container-part-p1'>2022</p>
              <p className='section-blok__section__container-part-p2'>UI/UX deisgn of the month</p>
              <p className='section-blok__section__container-part-p3'>Wbsite of the day</p>
              <p className='section-blok__section__container-part-p3'>Mobile exelence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}