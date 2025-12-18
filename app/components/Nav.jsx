'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useContactModal } from '../context/ContactModalContext'

const Nav = ({ activePage = 'HOME' }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const { openContactModal } = useContactModal()

  const navLinks = [
    { id: 'HOME', label: 'HOME', hoverLabel: 'WELCOME', href: '/' },
    { id: 'ABOUT', label: 'ABOUT', hoverLabel: 'WHO WE ARE', href: '/about' },
    { id: 'SERVICES', label: 'SERVICES', hoverLabel: 'HOW WE CAN HELP', href: '/services' },
    { id: 'ACQUISITION', label: 'ACQUISITION', hoverLabel: 'PARTNER WITH US', href: '/acquisition' },
    { id: 'PRICING', label: 'PRICING', hoverLabel: 'LEARN MORE', href: '/pricing' },
    { id: 'CONTACT US', label: 'CONTACT US', hoverLabel: 'GET IN TOUCH', href: null, isModal: true },
  ]

  const handleNavClick = (link) => {
    if (link.isModal) {
      openContactModal()
      setIsOpen(false)
      setIsHovered(false)
    }
  }

  const handleNavContainerClick = () => {
    // Only open on click if not already open (md+ behavior)
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const handleDotsClick = (e) => {
    e.stopPropagation()
    // Close everything when dots are clicked
    setIsOpen(false)
    setIsHovered(false)
    setHoveredLink(null)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    // Only collapse hover state if not clicked open
    if (!isOpen) {
      setIsHovered(false)
      setHoveredLink(null)
    }
  }

  // Determine if width should be expanded (either hovered or open)
  const isWidthExpanded = isHovered || isOpen

  return (
    <nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleNavContainerClick}
      className="cursor-pointer"
    >
      <div
        className={`bg-[#2D2D2D] rounded-sm overflow-hidden transition-all duration-1000 ease-out ${
          isWidthExpanded ? 'w-[270px] md:w-[450px]' : 'w-[200px] md:w-[270px]'
        }`}
      >
        {/* Header - Always visible */}
        <div className="flex items-center justify-between px-3 py-2 md:px-4 md:py-3">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-text-dim text-xs md:text-sm tracking-wide">You are here:</span>
            <span className="text-white text-xs md:text-sm font-medium tracking-wide uppercase">{activePage}</span>
          </div>

          {/* 4 Dots Button */}
          <button
            onClick={handleDotsClick}
            className={`grid grid-cols-2 gap-[2px] md:gap-[3px] ml-2 md:ml-4 p-1 cursor-pointer transition-transform duration-1000 ease-out ${
              isWidthExpanded ? 'rotate-180' : 'rotate-0'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full transition-colors duration-500 ${
              isWidthExpanded ? 'bg-[#FF9D42]' : 'bg-[#888888]'
            }`} />
            <span className={`w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full transition-colors duration-500 ${
              isWidthExpanded ? 'bg-[#FF9D42]' : 'bg-[#888888]'
            }`} />
            <span className={`w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full transition-colors duration-500 ${
              isWidthExpanded ? 'bg-[#FF9D42]' : 'bg-[#888888]'
            }`} />
            <span className={`w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full transition-colors duration-500 ${
              isWidthExpanded ? 'bg-[#FF9D42]' : 'bg-[#888888]'
            }`} />
          </button>
        </div>

        {/* Expandable Nav Links - Only shown when clicked open */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              link.isModal ? (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative flex items-center justify-between px-3 py-3 md:px-4 md:py-4 transition-all duration-300 text-left ${
                    hoveredLink === link.id ? 'bg-[#3D3D3D]' : 'bg-transparent'
                  }`}
                >
                  <span className={`text-xs md:text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    hoveredLink === link.id ? 'text-white' : 'text-[#CCCCCC]'
                  }`}>
                    {hoveredLink === link.id ? link.hoverLabel : link.label}
                  </span>

                  {/* Active indicator - blue dot */}
                  {activePage === link.id && (
                    <span className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-[#027FFF] rounded-full" />
                  )}
                </button>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false)
                    setIsHovered(false)
                  }}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative flex items-center justify-between px-3 py-3 md:px-4 md:py-4 transition-all duration-300 ${
                    hoveredLink === link.id ? 'bg-[#3D3D3D]' : 'bg-transparent'
                  }`}
                >
                  <span className={`text-xs md:text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    hoveredLink === link.id ? 'text-white' : 'text-[#CCCCCC]'
                  }`}>
                    {hoveredLink === link.id ? link.hoverLabel : link.label}
                  </span>

                  {/* Active indicator - blue dot */}
                  {activePage === link.id && (
                    <span className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-[#027FFF] rounded-full" />
                  )}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
