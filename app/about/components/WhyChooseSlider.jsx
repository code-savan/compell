'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

const WhyChooseSlider = () => {
  const sliderRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const slides = [
    { id: 1, image: '/slides/slide1.png', caption: 'We prioritize data and research' },
    { id: 2, image: '/slides/slide2.png', caption: 'Fast development cycles' },
    { id: 3, image: '/slides/slide3.png', caption: 'Real business experience' },
    { id: 4, image: '/slides/slide4.png', caption: 'App + software product studio' },
    { id: 5, image: '/slides/slide5.png', caption: 'Perfect for companies that need automation efficiency and digital transformation' },
  ]

  // Mouse events
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section className="section-solid w-full py-12 md:py-20">
      {/* Section Heading */}
      <h2 className="text-white text-xs sm:text-sm tracking-[0.2em] uppercase mb-8 md:mb-12 px-4 sm:px-8 md:px-16">
        WHY CHOOSE COMPELL?
      </h2>

      {/* Slider Container - Horizontal Scroll */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        className={`overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ userSelect: isDragging ? 'none' : 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex gap-4 sm:gap-6 px-4 sm:px-8 md:px-16" style={{ width: 'max-content' }}>
          {slides.map((slide) => (
            <div key={slide.id} className="flex flex-col w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0 bg-[#070101] rounded-md pb-4">
              {/* Slide Image */}
              <div className="w-full aspect-square bg-[#5A5A5A] border-2 border-[#333333] flex items-center justify-center overflow-hidden pointer-events-none">
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  draggable={false}
                />
              </div>

              {/* Slide Caption */}
              <p className="text-text-dim text-xs sm:text-sm md:text-base mt-3 md:mt-4 h-fit leading-relaxed ml-3 pr-3">
                {slide.caption}
              </p>
            </div>
          ))}

          {/* Spacer at the end */}
          <div className="w-4 sm:w-8 md:w-16 flex-shrink-0" />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSlider
