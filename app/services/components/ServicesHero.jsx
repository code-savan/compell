import React from 'react'

const ServicesHero = () => {
  return (
    <section className="section-solid h-[55%] w-full relative flex flex-col">
      {/* Hero Content */}
      <div className="flex-1 flex items-end pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-16">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8">
          {/* Left - Main Heading */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <h2 className="text-text-dim text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              OUR
            </h2>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              SERVICES
            </h1>
          </div>

          {/* Right - Description */}
          <div className="md:max-w-md lg:max-w-lg">
            <p className="text-text-dim text-xs sm:text-sm md:text-base leading-relaxed tracking-wide">
              What we do to bring ideas to life and build digital products that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
