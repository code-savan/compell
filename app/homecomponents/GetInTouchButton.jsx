'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useContactModal } from '../context/ContactModalContext'

const GetInTouchButton = ({ className = '' }) => {
  const { openContactModal } = useContactModal()

  return (
    <button
      onClick={openContactModal}
      className={`flex items-center gap-2 bg-button-bg hover:bg-[#3d3d3d] transition-colors px-5 py-3 rounded-sm ${className}`}
    >
      <span className="text-white text-sm tracking-[0.1em] uppercase">
        GET IN TOUCH
      </span>
      <ArrowUpRight className="w-4 h-4 text-white" />
    </button>
  )
}

export default GetInTouchButton
