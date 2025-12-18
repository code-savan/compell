'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import GetInTouchButton from './GetInTouchButton'

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Facebook", url: "#" }
  ]

  return (

    <div className='w-full h-full bg-transparent p-20'>
    <footer className="section-solid w-full py-12 md:py-20 px-4 sm:px-8 md:px-16">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12 mb-12 md:mb-16">
        {/* Left Side */}
        <div>
          <h2 className="text-text-dim text-xl sm:text-2xl md:text-[32px] leading-snug mb-6 md:mb-8 max-w-lg">
            We can&apos;t wait to build something great with you.
          </h2>

          <GetInTouchButton />
        </div>

        {/* Right Side - Social Links */}
        <div className="flex flex-col gap-3 md:gap-4 md:items-end">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-text-dim transition-colors"
            >
              <span className="text-sm md:text-base text-text-dim">{link.name}</span>
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#1E1E1E] mb-6 md:mb-8" />

      {/* Copyright */}
      <p className="text-[#4E4E4E] text-xs md:text-[14px] text-center">
        Compell Solutions 2025. All rights reserved.
      </p>
    </footer>
    </div>
  )
}

export default Footer
