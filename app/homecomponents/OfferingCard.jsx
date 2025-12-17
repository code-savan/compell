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
    <div id={id} className="bg-[#2D2D2D] p-6 md:p-8 flex flex-col">
      {/* Title */}
      <h3 className="text-white text-lg md:text-xl tracking-wide mb-6">
        {title}
      </h3>

      {/* Image */}
      {image && (
        <div className="w-full aspect-video relative mb-6 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-text-dim text-sm md:text-base leading-relaxed mb-6">
        {description}
      </p>

      {/* What we offer */}
      {offerings.length > 0 && (
        <div>
          <p className="text-text-dim text-sm mb-3">What we offer:</p>
          <ul className="space-y-1">
            {offerings.map((item, index) => (
              <li key={index} className="text-text-dim text-sm flex items-start gap-2">
                <span className="mt-1">•</span>
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
