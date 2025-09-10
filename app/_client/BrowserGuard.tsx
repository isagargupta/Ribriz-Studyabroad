'use client'

import React, { useState, useEffect } from 'react'

interface BrowserGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const BrowserGuard: React.FC<BrowserGuardProps> = ({ children, fallback = null }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

export default BrowserGuard