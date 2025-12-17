import React from 'react'

const OurTeam = () => {
  return (
    <section className="section-solid w-full py-12 md:py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Label */}
        <span className="text-white text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 md:mb-8">
          OUR TEAM
        </span>

        {/* Main Description */}
        <p className="text-text-dim text-base sm:text-xl md:text-2xl lg:text-[28px] leading-relaxed">
          Product strategists, App developers, UI/UX designers, Automation Experts, and Consultants with U.S. and International Experience.
        </p>
      </div>
    </section>
  )
}

export default OurTeam
