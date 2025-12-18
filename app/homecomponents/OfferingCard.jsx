import React from 'react'
import Image from 'next/image'

const OfferingCard = ({
  id,
  title,
  image,
  imageAlt,
  description,
  offerings = []
}) => {
  return (
    <div id={id} className="bg-[#2D2D2D] p-4 sm:p-6 md:p-8 flex flex-col rounded-sm">
      {/* Title */}
      <h3 className="text-white text-base sm:text-lg md:text-xl tracking-wide mb-4 md:mb-6">
        {title}
      </h3>

      {/* Image */}
      {image && (
        <div className="w-full aspect-video relative mb-4 md:mb-6 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-text-dim text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6">
        {description}
      </p>

      {/* What we offer */}
      {offerings.length > 0 && (
        <div>
          <p className="text-text-dim text-xs sm:text-sm mb-2 md:mb-3">What we offer:</p>
          <ul className="space-y-1">
            {offerings.map((item, index) => (
              <li key={index} className="text-text-dim text-xs sm:text-sm flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default OfferingCard
