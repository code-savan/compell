'use client'

import React, { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import GetInTouchButton from './GetInTouchButton'

const CaseStudySheet = ({
  isOpen,
  onClose,
  project
}) => {
  const sheetRef = useRef(null)

  // Focus management and keyboard handling
  useEffect(() => {
    if (isOpen && sheetRef.current) {
      // Focus the sheet when it opens
      sheetRef.current.focus()

      // Prevent body scroll when sheet is open
      document.body.style.overflow = 'hidden'

      // Handle Escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = ''
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Don't render if no project
  if (!project) return null

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-500 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sheet - Full width on mobile, 80% on desktop */}
      <div
        ref={sheetRef}
        tabIndex={-1}
        className={`fixed top-0 right-0 h-full w-full md:w-[80%] md:max-w-[1200px] bg-background z-50 overflow-hidden shadow-2xl outline-none transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Project Info */}
          <div className="w-full md:w-[40%] p-4 md:p-8 lg:p-12 flex flex-col overflow-y-auto flex-shrink-0">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-white hover:text-text-dim transition-colors mb-4 md:mb-8 self-start p-2 -ml-2"
              aria-label="Close case study"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Project Name */}
            <h2 className="text-white text-lg md:text-xl lg:text-2xl tracking-[0.15em] uppercase font-medium mb-4 md:mb-6">
              {project.name}
            </h2>

            {/* Short Description */}
            <p className="text-white text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              {project.description}
            </p>

            {/* Detailed Description */}
            <p className="text-text-dim text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              {project.detailedDescription}
            </p>

            {/* CTA Button */}
            <GetInTouchButton className="w-fit" />
          </div>

          {/* Right Side - Image Gallery */}
          <div className="w-full md:w-[60%] overflow-y-auto p-4 md:p-6 flex-1">
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Row 1: One square div - First gallery image */}
              <div
                className="w-full aspect-square"
                style={{ backgroundColor: project.gallery?.[0]?.bg || project.bgColor }}
              >
                {project.gallery?.[0]?.image && (
                  <div className="w-full h-full relative">
                    <Image
                      src={project.gallery[0].image}
                      alt="Gallery image 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Row 2: Two columns */}
              <div className="flex gap-3 md:gap-4">
                <div
                  className="w-1/2 aspect-square"
                  style={{ backgroundColor: project.gallery?.[1]?.bg || '#FFFFFF' }}
                >
                  {project.gallery?.[1]?.image && (
                    <div className="w-full h-[450px] relative">
                      <Image
                        src={project.gallery[1].image}
                        alt="Gallery image 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div
                  className="w-1/2 aspect-square"
                  style={{ backgroundColor: project.gallery?.[2]?.bg || '#F5E6D3' }}
                >
                  {project.gallery?.[2]?.image && (
                    <div className="w-full h-[450px] relative">
                      <Image
                        src={project.gallery[2].image}
                        alt="Gallery image 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Row 3: Rectangle div */}
              <div
                className="w-full aspect-[2/1]"
                style={{ backgroundColor: project.gallery?.[3]?.bg || '#9B9BF7' }}
              >
                {project.gallery?.[3]?.image && (
                  <div className="w-full h-full relative">
                    <Image
                      src={project.gallery[3].image}
                      alt="Gallery image 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Row 4: Bigger rectangle div */}
              <div
                className="w-full aspect-[4/3]"
                style={{ backgroundColor: project.gallery?.[4]?.bg || '#9B9BF7' }}
              >
                {project.gallery?.[4]?.image && (
                  <div className="w-full h-full relative">
                    <Image
                      src={project.gallery[4].image}
                      alt="Gallery image 5"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Row 5: Two columns (70% / 30%) */}
              <div className="flex gap-3 md:gap-4 h-[300px]">
                <div
                  className="w-[65%] aspect-[16/9]"
                  style={{ backgroundColor: project.gallery?.[5]?.bg || '#FFB769' }}
                >
                  {project.gallery?.[5]?.image && (
                    <div className="w-full h-full relative">
                      <Image
                        src={project.gallery[5].image}
                        alt="Gallery image 6"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div
                  className="w-[35%] aspect-[9/16]"
                  style={{ backgroundColor: project.gallery?.[6]?.bg || '#6B8BF5' }}
                >
                  {project.gallery?.[6]?.image && (
                    <div className="w-full h-full relative">
                      <Image
                        src={project.gallery[6].image}
                        alt="Gallery image 7"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudySheet
