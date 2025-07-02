"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, User, ArrowRight, Play, Pause, Twitter, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Abidjan - Plateau",
    image: "/assets/images/illustrations/page-accueil/eglise.jpg",
    description:
      "Découvrez le cœur économique de la Côte d'Ivoire avec ses gratte-ciels modernes, ses bureaux prestigieux et ses appartements de luxe au centre-ville.",
  },
  {
    id: 2,
    name: "Grand-Bassam",
    image: "/assets/images/illustrations/page-accueil/place-about-exterieur.jpg",
    description:
      "Investissez dans cette ville historique classée UNESCO, entre villas coloniales rénovées et nouvelles résidences face à l'océan Atlantique.",
  },
  {
    id: 3,
    name: "Yamoussoukro",
    image: "/assets/images/illustrations/page-accueil/savane.jpg",
    description:
      "Explorez les opportunités immobilières dans la capitale politique, avec ses grands espaces verts et son potentiel de développement urbain.",
  },
  {
    id: 4,
    name: "San-Pédro",
    image: "/assets/images/illustrations/page-accueil/coline.jpg",
    description:
      "Profitez du boom économique de ce port dynamique avec des projets immobiliers modernes près des installations portuaires et des plages.",
  },
];

const popularSpots = [
  { name: "Cocody, Villa Moderne", image: "/assets/images/illustrations/page-accueil/maison-interieur-blanc.png" },
  { name: "Marcory, Appartements", image: "/assets/images/illustrations/page-accueil/place-about.jpg" },
  { name: "Riviera, Résidences", image: "/assets/images/illustrations/page-accueil/maison-prochedestation.jpg" },
]

export default function MainPage() {
  const [currentDestination, setCurrentDestination] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleDestinationChange = (index: number) => {
    setCurrentDestination(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, #252525 0%, #A07539 50%, #252525 100%)` 
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <motion.div
        key={currentDestination}
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Image
          src={destinations[currentDestination].image || "/placeholder.svg"}
          alt={destinations[currentDestination].name}
          fill
          className="object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(135deg, rgba(37, 37, 37, 0.8) 0%, rgba(160, 117, 57, 0.6) 50%, rgba(37, 37, 37, 0.8) 100%)` 
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <motion.nav
          className="flex items-center justify-between p-4 md:p-6 lg:p-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 md:space-x-8">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/assets/images/logo-sans-fond.png" 
                alt="Logo Immobilier Côte d'Ivoire" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </motion.div>
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              {["Accueil", "À Propos", "Contact", "Propriétés"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm lg:text-base transition-colors"
                  style={{ color: '#EADD8E', opacity: 0.9 }}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.9 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -2, opacity: 1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-white/10"
              style={{ color: '#EADD8E' }}
            >
              <Search className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-white/10"
              style={{ color: '#EADD8E' }}
            >
              <User className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </motion.nav>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="lg:col-span-2 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              key={currentDestination}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6"
                style={{ color: '#EADD8E' }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                CÔTE D'IVOIRE
              </motion.h1>
              <motion.p
                className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl leading-relaxed"
                style={{ color: '#EADD8E', opacity: 0.9 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.9 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {destinations[currentDestination].description}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button
                  className="backdrop-blur-sm px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base"
                  style={{ 
                    backgroundColor: 'rgba(234, 221, 142, 0.2)',
                    color: '#EADD8E',
                    border: '1px solid rgba(234, 221, 142, 0.3)'
                  }}
                  onClick={() => handleDestinationChange((currentDestination + 1) % destinations.length)}
                >
                  Explorer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                  style={{ color: '#EADD8E' }}
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                >
                  {isAutoPlay ? <Pause className="h-4 w-4 md:h-5 md:w-5" /> : <Play className="h-4 w-4 md:h-5 md:w-5" />}
                </Button>
              </motion.div>
            </motion.div>

            {/* Destination Indicators */}
            <motion.div
              className="flex space-x-2 mt-6 md:mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {destinations.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300`}
                  style={{
                    backgroundColor: index === currentDestination ? '#EADD8E' : 'rgba(234, 221, 142, 0.3)'
                  }}
                  onClick={() => handleDestinationChange(index)}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Content - Popular Destinations */}
          <motion.div
            className="lg:col-span-1 flex flex-col justify-center order-1 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div 
              className="backdrop-blur-md rounded-2xl p-4 md:p-6 border"
              style={{ 
                backgroundColor: 'rgba(234, 221, 142, 0.1)',
                borderColor: 'rgba(234, 221, 142, 0.2)'
              }}
            >
              <h3 
                className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
                style={{ color: '#EADD8E' }}
              >
                Populaires
              </h3>
              <div className="space-y-3 md:space-y-4">
                {popularSpots.map((spot, index) => (
                  <motion.div
                    key={spot.name}
                    className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleDestinationChange(index % destinations.length)}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden">
                      <Image
                        src={spot.image || "/placeholder.svg"}
                        alt={spot.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p 
                        className="text-sm md:text-base font-medium truncate"
                        style={{ color: '#EADD8E' }}
                      >
                        {spot.name}
                      </p>
                      <p 
                        className="text-xs md:text-sm truncate"
                        style={{ color: '#EADD8E', opacity: 0.7 }}
                      >
                        Propriété
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-4 md:left-8 flex space-x-3 md:space-x-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-colors"
            style={{ 
              backgroundColor: 'rgba(234, 221, 142, 0.1)',
              borderColor: 'rgba(234, 221, 142, 0.2)',
              color: '#EADD8E'
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              backgroundColor: 'rgba(234, 221, 142, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter className="h-3 w-3 md:h-4 md:w-4" />
          </motion.button>
          <motion.button
            className="w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-colors"
            style={{ 
              backgroundColor: 'rgba(234, 221, 142, 0.1)',
              borderColor: 'rgba(234, 221, 142, 0.2)',
              color: '#EADD8E'
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              backgroundColor: 'rgba(234, 221, 142, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-3 w-3 md:h-4 md:w-4" />
          </motion.button>
          <motion.button
            className="w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-colors"
            style={{ 
              backgroundColor: 'rgba(234, 221, 142, 0.1)',
              borderColor: 'rgba(234, 221, 142, 0.2)',
              color: '#EADD8E'
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              backgroundColor: 'rgba(234, 221, 142, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook className="h-3 w-3 md:h-4 md:w-4" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}