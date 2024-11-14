'use client'

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import Image from 'next/image'
import CAROUSELL from '@/app/utils/carousell'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

export default function CarouselComp() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="slider-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {CAROUSELL.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="image-wrapper">
              <Image src={item.image} alt={`Carousel${item.id}`} width={500} height={300} className="carousel-image" />
              <div className="carousel-text">
                <b>Colorful Art Work</b>
                <div className="carousel-text-div">See Details <div></div></div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div ref={prevRef} className="control-arrow control-arrow-1">
            <BiLeftArrow size={20} />
          </div>
          <div ref={nextRef} className="control-arrow control-arrow-2">
            <BiRightArrow size={20} />
          </div>
        </div>
      </Swiper>
    </div>
  )
};