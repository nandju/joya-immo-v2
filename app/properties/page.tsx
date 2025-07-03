"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoaderPage from "@/components/loader-page"
import PropertyPage from "@/components/property/property"


export default function Properties() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? <LoaderPage key="loader" /> : <PropertyPage key="properties" />}
      </AnimatePresence>
    </div>
  )
}
