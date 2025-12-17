'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import ProcessSheet from './ProcessSheet'

const BGReveal = () => {
  const [isProcessOpen, setIsProcessOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1 // Button shows when 10% of section is visible
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <>
      <div ref={sectionRef} className='bg-transparent w-full h-[30%] relative'>
        {/* Background reveal section - shows the fixed background image */}

        {/* Our Process Button - Mobile: bottom center, Desktop: bottom right */}
        <button
          onClick={() => setIsProcessOpen(true)}
          className={`flex items-center justify-center fixed bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-16 md:right-16 bg-[#027FFF] hover:bg-[#0066CC] transition-all duration-300 p-2 sm:p-[10px] rounded-sm gap-1.5 sm:gap-[10px] shadow-lg cursor-pointer z-30 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <span className='text-white uppercase text-xs sm:text-sm tracking-wide font-semibold'>Our Process</span>
          <ArrowUpRight className='w-3 h-3 sm:w-4 sm:h-4 text-white' />
        </button>
      </div>

      <ProcessSheet
        isOpen={isProcessOpen}
        onClose={() => setIsProcessOpen(false)}
      />
    </>
  )
}

export default BGReveal
