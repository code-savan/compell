'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useContactModal } from '../context/ContactModalContext'

const GetInTouchButton = ({ className = '' }) => {
  const { openContactModal } = useContactModal()

  return (
    <button
      onClick={openContactModal}
      className={`flex items-center gap-1.5 sm:gap-2 bg-button-bg hover:bg-[#3d3d3d] transition-colors px-4 py-2.5 sm:px-5 sm:py-3 rounded-sm ${className}`}
    >
      <span className="text-white text-xs sm:text-sm tracking-[0.1em] uppercase">
        GET IN TOUCH
      </span>
      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
    </button>
  )
}

export default GetInTouchButton
