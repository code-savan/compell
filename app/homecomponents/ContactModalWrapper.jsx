'use client'

import React from 'react'
import { useContactModal } from '../context/ContactModalContext'
import ContactModal from './ContactModal'

const ContactModalWrapper = () => {
  const { isContactOpen, closeContactModal } = useContactModal()

  return (
    <ContactModal
      isOpen={isContactOpen}
      onClose={closeContactModal}
    />
  )
}

export default ContactModalWrapper
