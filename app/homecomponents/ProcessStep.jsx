import React from 'react'
import Image from 'next/image'

const ProcessStep = ({ stepNumber, title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Step Image */}
      <div className="w-full aspect-[4/3] bg-[#D9D9D9] flex items-center justify-center mb-4 md:mb-6 overflow-hidden relative">
        {image && (
          <Image
            src={image}
            alt={`Step ${stepNumber}`}
            fill
            className="object-contain"
          />
        )}
      </div>

      {/* Step Title */}
      <h3 className="text-white text-base sm:text-lg md:text-xl tracking-wide mb-2 md:mb-3">
        Step {stepNumber}: {title}
      </h3>

      {/* Step Description */}
      <p className="text-text-dim text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default ProcessStep
