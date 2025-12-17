import React from 'react'

const AcquisitionHero = () => {
  return (
    <section className="section-solid h-[75%] w-full relative flex flex-col">
      {/* Hero Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16">
        <div className="text-center max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-text-dim text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-1 sm:mb-2">
            ACQUISITIONS  &
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-6 md:mb-8">
            PARTNERSHIPS
          </h2>

          {/* Description */}
          <p className="text-text-dim text-xs sm:text-sm md:text-base leading-relaxed tracking-wide">
            How we build, sell, and collaborate on digital products for long-term value.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AcquisitionHero
