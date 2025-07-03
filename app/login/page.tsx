"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoaderPage from "@/components/loader-page"
import LoginPage from "@/components/login/login"


export default function Login() {
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
        {isLoading ? <LoaderPage key="loader" /> : <LoginPage key="login" />}
      </AnimatePresence>
    </div>
  )
}
