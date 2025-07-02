"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoaderPage from "@/components/loader-page"
import MainPage from "@/components/main-page"


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 second loader

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">{isLoading ? <LoaderPage key="loader" /> : <MainPage key="main" />}</AnimatePresence>
    </div>
  )
}
