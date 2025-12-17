'use client'

import React, { useState } from 'react'
import CaseStudyCard from './CaseStudyCard'
import CaseStudySheet from './CaseStudySheet'

const OurProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const projects = [
    {
      name: "AJOPAY",
      description: "Ajo Pay is a digital group savings platform built to simplify collective contributions.",
      detailedDescription: "We delivered the brand strategy and design, product strategy, UX, and interface systems that support group management, scheduled payments, real-time tracking, and secure payouts–turning traditional community savings into a seamless digital product.",
      bgColor: "#FFB769",
      logo: "/project1.png",
      logoAlt: "AjoPay Logo",
      link: "#",
      gallery: [
        { bg: "#FFFFFF", image: "" },
        { bg: "#F5E6D3", image: "" },
        { bg: "#9B9BF7", image: "" },
        { bg: "#9B9BF7", image: "" },
        { bg: "#FFB769", image: "" },
        { bg: "#6B8BF5", image: "" }
      ]
    },
    {
      name: "PLANORRA",
      description: "Planorra is a modern event platform designed and built to connect people with experiences.",
      detailedDescription: "We crafted the brand identity, product strategy, and user experience for an event discovery platform that helps users find, organize, and attend events that match their interests and lifestyle.",
      bgColor: "#685EFF",
      logo: "/project2.png",
      logoAlt: "Planorra Logo",
      link: "#",
      gallery: [
        { bg: "#FFFFFF", image: "" },
        { bg: "#E8E8FF", image: "" },
        { bg: "#685EFF", image: "" },
        { bg: "#685EFF", image: "" },
        { bg: "#9B9BF7", image: "" },
        { bg: "#685EFF", image: "" }
      ]
    }
  ]

  const handleOpenSheet = (project) => {
    setSelectedProject(project)
    // Small delay to ensure DOM is ready for animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsSheetOpen(true)
      })
    })
  }

  const handleCloseSheet = () => {
    setIsSheetOpen(false)
    setTimeout(() => setSelectedProject(null), 500) // Clear after animation
  }

  return (
    <section className="section-solid w-full py-20 px-8 md:px-16">
      {/* Section Heading */}
      <h2 className="text-white text-sm tracking-[0.2em] uppercase mb-12">
        OUR PROJECTS
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <CaseStudyCard
            key={index}
            name={project.name}
            description={project.description}
            bgColor={project.bgColor}
            logo={project.logo}
            logoAlt={project.logoAlt}
            onViewCaseStudy={() => handleOpenSheet(project)}
          />
        ))}
      </div>

      {/* Case Study Sheet */}
      <CaseStudySheet
        isOpen={isSheetOpen}
        onClose={handleCloseSheet}
        project={selectedProject}
      />
    </section>
  )
}

export default OurProjects
