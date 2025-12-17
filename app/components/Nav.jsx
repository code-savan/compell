'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useContactModal } from '../context/ContactModalContext'

const Nav = ({ activePage = 'HOME' }) => {
  const [isExpanded, setIsExpanded] = useState(false)
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
      setIsExpanded(false)
    }
  }

  return (
    <nav
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false)
        setHoveredLink(null)
      }}
    >
      <div
        className={`bg-[#2D2D2D] rounded-sm overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? 'w-[280px]' : 'w-auto'
        }`}
      >
        {/* Header - Always visible */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-text-dim text-sm tracking-wide">You are here:</span>
            <span className="text-white text-sm font-medium tracking-wide uppercase">{activePage}</span>
          </div>

          {/* 4 Dots Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsExpanded(false)
            }}
            className="grid grid-cols-2 gap-[3px] ml-4 hover:opacity-70 transition-opacity"
          >
            <span className="w-[5px] h-[5px] bg-[#FF9D42] rounded-full" />
            <span className="w-[5px] h-[5px] bg-[#FF9D42] rounded-full" />
            <span className="w-[5px] h-[5px] bg-[#FF9D42] rounded-full" />
            <span className="w-[5px] h-[5px] bg-[#FF9D42] rounded-full" />
          </button>
        </div>

        {/* Expandable Nav Links */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
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
                  className={`relative flex items-center justify-between px-4 py-4 transition-all duration-300 text-left ${
                    hoveredLink === link.id ? 'bg-[#3D3D3D]' : 'bg-transparent'
                  }`}
                >
                  <span className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    hoveredLink === link.id ? 'text-white' : 'text-[#CCCCCC]'
                  }`}>
                    {hoveredLink === link.id ? link.hoverLabel : link.label}
                  </span>

                  {/* Active indicator - blue dot */}
                  {activePage === link.id && (
                    <span className="w-[8px] h-[8px] bg-[#027FFF] rounded-full" />
                  )}
                </button>
              ) : (
                <Link
                  key={link.id}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative flex items-center justify-between px-4 py-4 transition-all duration-300 ${
                    hoveredLink === link.id ? 'bg-[#3D3D3D]' : 'bg-transparent'
                  }`}
                >
                  <span className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    hoveredLink === link.id ? 'text-white' : 'text-[#CCCCCC]'
                  }`}>
                    {hoveredLink === link.id ? link.hoverLabel : link.label}
                  </span>

                  {/* Active indicator - blue dot */}
                  {activePage === link.id && (
                    <span className="w-[8px] h-[8px] bg-[#027FFF] rounded-full" />
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
