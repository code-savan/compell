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
    <footer className="section-solid w-full py-20 px-8 md:px-16">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 mb-16">
        {/* Left Side */}
        <div>
          <h2 className="text-text-dim text-2xl md:text-3xl lg:text-4xl leading-snug mb-8 max-w-lg">
            We can&apos;t wait to build something great with you.
          </h2>

          <GetInTouchButton />
        </div>

        {/* Right Side - Social Links */}
        <div className="flex flex-col gap-4 md:items-end">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-text-dim transition-colors"
            >
              <span className="text-base">{link.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#1E1E1E] mb-8" />

      {/* Copyright */}
      <p className="text-[#4E4E4E] text-[14px] text-center">
        Compell Solutions 2025. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
