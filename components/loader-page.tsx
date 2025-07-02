"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Building2 } from "lucide-react"

export default function LoaderPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{ 
        background: `linear-gradient(135deg, #252525 0%, #A07539 50%, #252525 100%)` 
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="mb-8">
          {/* Logo immobilier */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* <div 
              className="relative p-4 rounded-2xl shadow-2xl"
              style={{ backgroundColor: '#EADD8E' }}
            > */}
              <img 
                src="/assets/images/logo-sans-fond.png" 
                alt="Logo Immobilier Côte d'Ivoire" 
                className="w-40 h-40 object-contain"
              />
              {/* <div 
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{ 
                  background: `linear-gradient(45deg, #A07539 0%, transparent 50%, #A07539 100%)` 
                }}
              /> */}
            {/* </div> */}
          </motion.div>

          {/* <motion.h1
            className="text-2xl md:text-4xl font-medium mb-2"
            style={{ color: '#EADD8E' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Immobilier CI
          </motion.h1> */}
          {/* <motion.p
            className="text-lg opacity-80"
            style={{ color: '#EADD8E' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Découvrez la Côte d'Ivoire
          </motion.p> */}
          <motion.p
            className="text-2xl md:text-4xl opacity-70"
            style={{ color: '#EADD8E' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Votre partenaire immobilier de confiance
          </motion.p>
        </div>

        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm mb-2" style={{ color: '#EADD8E' }}>
            <span className="opacity-80">Chargement</span>
            <span className="opacity-80">{progress}%</span>
          </div>
          <div 
            className="w-full rounded-full h-3 overflow-hidden shadow-inner"
            style={{ backgroundColor: 'rgba(234, 221, 142, 0.2)' }}
          >
            <motion.div
              className="h-full rounded-full shadow-sm"
              style={{ 
                background: `linear-gradient(90deg, #EADD8E 0%, #A07539 50%, #EADD8E 100%)` 
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Éléments décoratifs */}
      {/* <motion.div
        className="absolute top-10 left-10 opacity-20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Home size={24} style={{ color: '#EADD8E' }} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-10 opacity-20"
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Building2 size={28} style={{ color: '#A07539' }} />
      </motion.div> */}
    </motion.div>
  )
}