'use client'

import React from 'react'
import Image from 'next/image'
import Nav from './Nav'

const Header = ({ activePage = 'HOME' }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="flex items-start justify-between p-4 md:p-8">
        {/* Navigation */}
        <div className="pointer-events-auto">
          <Nav activePage={activePage} />
        </div>

        {/* Logo */}
        <div className="pointer-events-auto">
          <Image
            src="/logo.png"
            alt="Compell Logo"
            className="w-[24px] md:w-[30px]"
            width={56}
            height={56}
            priority
          />
        </div>
      </div>
    </header>
  )
}

export default Header
