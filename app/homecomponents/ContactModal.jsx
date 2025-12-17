'use client'

import React, { useState } from 'react'
import { User, Mail, ChevronDown, ArrowUpRight, X } from 'lucide-react'

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    description: ''
  })

  const subjectOptions = [
    "App Development",
    "Custom Software",
    "Consulting",
    "Partnership",
    "General Inquiry"
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    onClose()
  }

  // Don't render anything if modal is not open
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-50 transition-opacity duration-400 ease-out animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
        <div
          className="bg-background w-full max-w-2xl p-8 md:p-12 transform transition-all duration-400 ease-out rounded-sm animate-scale-in relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-dim hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-white text-2xl md:text-3xl tracking-[0.2em] uppercase font-bold mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-text-dim text-base">
              Let's talk about what you want to build.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-[#2D2D2D] text-white placeholder-text-dim px-5 py-4 pr-12 outline-none focus:ring-1 focus:ring-[#444] transition-all rounded-sm"
              />
              <User className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#2D2D2D] text-white placeholder-text-dim px-5 py-4 pr-12 outline-none focus:ring-1 focus:ring-[#444] transition-all rounded-sm"
              />
              <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim" />
            </div>

            {/* Subject Category */}
            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#2D2D2D] text-text-dim px-5 py-4 pr-12 outline-none focus:ring-1 focus:ring-[#444] transition-all appearance-none cursor-pointer rounded-sm"
              >
                <option value="" disabled>Subject category</option>
                {subjectOptions.map((option, index) => (
                  <option key={index} value={option} className="bg-[#2D2D2D] text-white">
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-dim pointer-events-none" />
            </div>

            {/* Description */}
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full bg-[#2D2D2D] text-white placeholder-text-dim px-5 py-4 outline-none focus:ring-1 focus:ring-[#444] transition-all resize-none rounded-sm"
            />

            {/* Submit Button */}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="flex items-center gap-2 bg-button-bg hover:bg-[#3d3d3d] transition-colors px-6 py-4 rounded-sm"
              >
                <span className="text-white text-sm tracking-[0.15em] uppercase">
                  GET IN TOUCH
                </span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactModal
