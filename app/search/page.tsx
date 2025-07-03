"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoaderPage from "@/components/loader-page"
import SearchPage from "@/components/search/search"


export default function Search() {
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
        {isLoading ? <LoaderPage key="loader" /> : <SearchPage key="search" />}
      </AnimatePresence>
    </div>
  )
}
