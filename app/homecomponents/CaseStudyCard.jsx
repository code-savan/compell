import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const CaseStudyCard = ({
  name,
  description,
  bgColor,
  logo,
  logoAlt,
  onViewCaseStudy
}) => {
  return (
    <div className="flex flex-col">
      {/* Project Image/Logo Area */}
      <div
        className="w-full aspect-[4/3] flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        {logo && (
          <Image
            src={logo}
            alt={logoAlt || name}
            width={150}
            height={150}
            className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px]"
          />
        )}
      </div>

      {/* Project Info */}
      <div className="mt-4 md:mt-6">
        <h3 className="text-white text-xs sm:text-sm tracking-[0.15em] uppercase font-medium mb-2 md:mb-3">
          {name}
        </h3>
        <p className="text-text-dim text-xs sm:text-sm leading-relaxed mb-3 md:mb-4">
          {description}
        </p>

        {/* View Case Study Button */}
        <button
          onClick={onViewCaseStudy}
          className="flex items-center gap-2 bg-button-bg hover:bg-[#3d3d3d] transition-colors px-3 py-2.5 sm:px-4 sm:py-3 w-full rounded-sm"
        >
          <span className="text-white text-xs sm:text-sm tracking-[0.1em] uppercase">
            VIEW CASE STUDY
          </span>
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </button>
      </div>
    </div>
  )
}

export default CaseStudyCard
