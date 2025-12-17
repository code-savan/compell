import React from 'react'
import Image from 'next/image'

const WhatWeDo = () => {
  const images = [
    '/whatwedo1.png',
    '/whatwedo2.png',
    '/whatwedo3.png',
  ]

  const bulletPoints = [
    'Build world-class apps',
    'Create custom tools for internal/external business use',
    'Develop products for startups and established companies',
    'Scale digital products using data and strategy',
    'Sell completed apps to investors & businesses',
  ]

  return (
    <section className="section-solid w-full py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Text on Left */}
        <div className="mb-12">
          <h2 className="text-white text-sm tracking-[0.2em] uppercase mb-6">
            WHAT WE DO
          </h2>
          <p className="text-text-dim text-sm md:text-base leading-relaxed max-w-sm">
            We merge technology, design, and business consulting into one powerful offering.
          </p>
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] bg-white border border-[#333333] flex items-center justify-center overflow-hidden"
            >
              <Image
                src={image}
                alt={`What we do ${index + 1}`}
                width={300}
                height={225}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bullet Points */}
        <div className="flex flex-col gap-3">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span className="text-white text-sm md:text-base">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
