'use client'

import React from 'react'
import GetInTouchButton from './GetInTouchButton'

const AtOurCore = () => {
  const tags = [
    ["We prioritize data and research"],
    ["Fast development cycles", "Real business experience", "App + software product studio"],
    ["Perfect for companies that need automation, efficiency & digital transformation"]
  ]

  return (
    <section className="section-solid w-full py-20 px-8 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Label */}
        <span className="text-white text-sm tracking-[0.2em] uppercase mb-8">
          AT OUR CORE
        </span>

        {/* Main Description */}
        <p className="text-text-dim text-xl md:text-2xl lg:text-[28px] leading-relaxed mb-6">
          Compell is a digital product and software studio that builds, scales, and sells apps for modern businesses.
        </p>

        <p className="text-text-dim text-xl md:text-2xl lg:text-[28px] leading-relaxed mb-16">
          We help companies turn ideas into functional digital products, create custom tools that improve efficiency, and design systems that support growth and innovation.
        </p>

        {/* Why Choose Compell */}
        <span className="text-white text-sm tracking-[0.2em] uppercase mb-8">
          WHY CHOOSE COMPELL?
        </span>

        {/* Tags */}
        <div className="flex flex-col items-center gap-3 mb-10">
          {tags.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
              {row.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="px-4 py-2 bg-[#070101] text-text-dim text-sm tracking-wide"
                >
                  {tag}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <GetInTouchButton className="px-6" />
      </div>
    </section>
  )
}

export default AtOurCore
