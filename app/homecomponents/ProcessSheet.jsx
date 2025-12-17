'use client'

import React, { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import ProcessStep from './ProcessStep'

const ProcessSheet = ({ isOpen, onClose }) => {
  const sheetRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
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

  const steps = [
    {
      stepNumber: 1,
      title: "Discovery & Strategy",
      description: "Understand your goals and business needs.",
      image: "/process/step1.png"
    },
    {
      stepNumber: 2,
      title: "Planning & Architecture",
      description: "Map out the technical roadmap and system design.",
      image: "/process/step2.png"
    },
    {
      stepNumber: 3,
      title: "Design & Prototyping",
      description: "Create intuitive interfaces and user experiences.",
      image: "/process/step3.png"
    },
    {
      stepNumber: 4,
      title: "Development & Building",
      description: "Build your product with clean, scalable code.",
      image: "/process/step4.png"
    },
    {
      stepNumber: 5,
      title: "Testing & Quality Assurance",
      description: "Ensure everything works flawlessly before launch.",
      image: "/process/step5.png"
    },
    {
      stepNumber: 6,
      title: "Launch & Scale",
      description: "Deploy your product and support its growth.",
      image: "/process/step6.png"
    }
  ]

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sheet - Full width on mobile, 550px on desktop */}
      <div
        ref={sheetRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[550px] bg-background z-50 overflow-y-auto transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-8 sticky top-0 bg-background z-10">
          <button
            onClick={onClose}
            className="text-white hover:text-text-dim transition-colors p-2 -ml-2"
            aria-label="Close sheet"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <span className="text-white text-xs md:text-sm tracking-[0.2em] uppercase">
            OUR PROCESS
          </span>
        </div>

        {/* Content */}
        <div className="px-4 md:px-8 pb-16">
          {/* Main Heading */}
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl text-center leading-snug mb-8 md:mb-12">
            Our 6-Step Build,<br />
            Scale  & Sell System.
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                image={step.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProcessSheet
