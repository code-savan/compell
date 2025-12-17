'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import OfferingCard from './OfferingCard'
import ProcessSheet from './ProcessSheet'
import GetInTouchButton from './GetInTouchButton'

const KeyOfferings = () => {
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

  const offerings = [
    {
      id: "app-development",
      title: "App Development & Product Creation",
      image: "/service1.png",
      imageAlt: "Mobile app development",
      description: "We build modern mobile apps, web apps, and SaaS platforms from idea to launch.",
      offerings: [
        "iOS & Android app development",
        "Web application development",
        "MVP creation",
        "UI/UX design",
        "Product architecture",
        "App scaling and optimization"
      ]
    },
    {
      id: "custom-software",
      title: "Custom Software Development for Companies",
      image: "/service2.png",
      imageAlt: "Custom software development",
      description: "We create tailored software solutions designed to solve specific business challenges.",
      offerings: [
        "Enterprise software solutions",
        "Business process automation",
        "Custom CRM & ERP systems",
        "API development & integration",
        "Database design & management",
        "Legacy system modernization"
      ]
    },
    {
      id: "app-scaling",
      title: "App Scaling & Growth Services",
      image: "/service3.png",
      imageAlt: "App scaling services",
      description: "We help businesses scale their applications to handle growth and increased demand.",
      offerings: [
        "Performance optimization",
        "Infrastructure scaling",
        "Load balancing solutions",
        "Cloud migration",
        "Analytics & monitoring",
        "Growth strategy consulting"
      ]
    },
    {
      id: "consulting",
      title: "Consulting & Digital Strategy",
      image: "/service4.png",
      imageAlt: "Digital consulting",
      description: "We provide expert guidance to help businesses navigate digital transformation.",
      offerings: [
        "Digital transformation roadmaps",
        "Technology stack consulting",
        "Product strategy",
        "Market research & analysis",
        "Competitive analysis",
        "Innovation workshops"
      ]
    },
    {
      id: "white-label",
      title: "White-Label Apps",
      image: "/service5.png",
      imageAlt: "White-label applications",
      description: "We build customizable white-label solutions that businesses can brand as their own.",
      offerings: [
        "Ready-to-deploy solutions",
        "Custom branding options",
        "Feature customization",
        "Ongoing support & updates",
        "Multi-tenant architecture",
        "Quick time to market"
      ]
    }
  ]

  const navItems = [
    { label: "App Development & Product Creation", target: "app-development" },
    { label: "Custom Software Development for Companies", target: "custom-software" },
    { label: "App Scaling & Growth Services", target: "app-scaling" },
    { label: "Consulting & Digital Strategy", target: "consulting" },
    { label: "White-Label Apps", target: "white-label" }
  ]

  const scrollToOffering = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section ref={sectionRef} className="section-solid w-full min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Sticky */}
        <div className="lg:w-[45%] lg:sticky lg:top-0 lg:h-screen p-4 sm:p-8 md:p-16 flex flex-col justify-between">
          <div>
            {/* Section Heading */}
            <h2 className="text-white text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6">
              KEY OFFERINGS
            </h2>

            {/* Description */}
            <p className="text-text-dim text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-sm">
              The core services and solutions we use to build, scale, and strengthen digital products.
            </p>

            {/* CTA Button */}
            <div className="mb-8 md:mb-16">
              <GetInTouchButton />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile, shown on lg */}
          <nav className="hidden lg:flex flex-col gap-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToOffering(item.target)}
                className="text-left text-white text-sm md:text-base underline underline-offset-4 hover:text-text-dim transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side - Scrolling Cards */}
        <div className="lg:w-[55%] flex flex-col gap-4 sm:gap-6 p-4 sm:p-8 md:p-16 lg:pl-0">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={index}
              id={offering.id}
              title={offering.title}
              image={offering.image}
              imageAlt={offering.imageAlt}
              description={offering.description}
              offerings={offering.offerings}
            />
          ))}
        </div>
      </div>

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

      <ProcessSheet
        isOpen={isProcessOpen}
        onClose={() => setIsProcessOpen(false)}
      />
    </section>
  )
}

export default KeyOfferings
