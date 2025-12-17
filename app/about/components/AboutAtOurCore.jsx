import React from 'react'

const AboutAtOurCore = () => {
  return (
    <section className="section-solid w-full py-12 md:py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Label */}
        <span className="text-white text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 md:mb-8">
          AT OUR CORE
        </span>

        {/* Main Description */}
        <p className="text-text-dim text-base sm:text-xl md:text-2xl lg:text-[28px] leading-relaxed">
          Compell Solutions is a digital product and app studio specializing in building, scaling, and selling apps — and creating custom software tools that help companies streamline operations, improve efficiency, and achieve sustainable growth.
        </p>
      </div>
    </section>
  )
}

export default AboutAtOurCore
