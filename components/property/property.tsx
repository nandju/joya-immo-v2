import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Heart, Grid3X3, List, Filter, MapPin, Star, ChevronDown, Bed, Users, Wifi, Car, Waves, Mountain } from "lucide-react"
import { properties, categories } from "../data/property"
import Image from "next/image"


export default function PropertyPage() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [activeCategory, setActiveCategory] = useState<string>("Tout")

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) => 
      prev.includes(propertyId) 
        ? prev.filter((id) => id !== propertyId) 
        : [...prev, propertyId]
    )
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-[#EADD8E] text-[#EADD8E]" />
        ))}
        {hasHalfStar && <Star className="w-3 h-3 fill-[#EADD8E]/50 text-[#EADD8E]" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-gray-300" />
        ))}
      </div>
    )
  }

  const getAmenityIcon = (amenity: string) => {
    switch(amenity) {
      case "Wifi": return <Wifi className="w-4 h-4" />
      case "Parking": return <Car className="w-4 h-4" />
      case "Piscine": return <Waves className="w-4 h-4" />
      case "Vue mer": return <Mountain className="w-4 h-4" />
      default: return <div className="w-4 h-4 bg-[#A07539] rounded-full" />
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#EADD8E]/10 to-[#A07539]/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.header
        className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-[#EADD8E]/30"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
            {/* Logo avec image */}
            <Image
              src="/assets/images/logo-sans-fond.png" // Remplace par le chemin correct de ton image
              alt="Logo Joya Immo"
              width={92}
              height={92}
              className="rounded-lg object-cover"
            />
            {/* <motion.h1 
              className="text-2xl font-bold text-[#252525]"
              whileHover={{ scale: 1.05 }}
            >
              Joya Immo
            </motion.h1> */}
            </div>
          </div>


            {/* Barre de recherche */}
            <div className="flex-1 max-w-md mx-4 sm:mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A07539] w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher un logement..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#A07539] transition-all"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-sm text-[#252525] hover:text-[#A07539] transition-colors">
                Louer
              </button>
              <button className="text-sm text-[#252525] hover:text-[#A07539] transition-colors">
                Vendre
              </button>
              <button className="px-4 py-2 bg-[#A07539] hover:bg-[#252525] text-white rounded-lg text-sm transition-colors">
                Connexion
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Categories */}
      <motion.div
        className="bg-white/90 backdrop-blur-sm border-b border-[#EADD8E]/30"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 sm:space-x-8 py-4 overflow-x-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.name
                    ? "bg-[#A07539] text-white" 
                    : "text-[#252525] hover:text-[#A07539] hover:bg-[#EADD8E]/20"
                }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="text-sm font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Location and Controls */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-5 h-5 text-[#A07539]" />
              <span className="text-lg font-semibold text-[#252525]">Abidjan, Côte d'Ivoire</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#252525]">Logements disponibles</h1>
            <p className="text-gray-600 mt-1">{properties.length} propriétés disponibles</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-lg border border-[#EADD8E]/30 p-1">
              <button 
                className={`p-2 rounded ${viewMode === "grid" ? "bg-[#A07539] text-white" : "text-[#252525] hover:bg-[#EADD8E]/20"}`}
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button 
                className={`p-2 rounded ${viewMode === "list" ? "bg-[#A07539] text-white" : "text-[#252525] hover:bg-[#EADD8E]/20"}`}
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-[#EADD8E]/30 rounded-lg hover:bg-[#EADD8E]/20 transition-colors">
              <Filter className="w-4 h-4 text-[#A07539]" />
              <span className="text-[#252525]">Filtres</span>
            </button>
          </div>
        </motion.div>

   {/* Property Grid */}
        <motion.div
          className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-[#EADD8E]/30 ${
                viewMode === "list" ? "flex" : ""
              }`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className={`relative ${viewMode === "list" ? "w-1/3" : ""}`}>
                <div className={`${viewMode === "list" ? "h-full" : "h-48"} overflow-hidden`}>
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      // e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-[#EADD8E]/30 to-[#A07539]/30 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-6xl opacity-20">🏠</div>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  onClick={() => toggleFavorite(property.id)}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </button>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-[#252525]">
                  {property.type}
                </div>
              </div>

              <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                <h3 className="font-semibold text-[#252525] mb-2 line-clamp-2">{property.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  <MapPin className="w-4 h-4 text-[#A07539]" />
                  <span className="text-sm text-gray-600">{property.location}</span>
                </div>
                
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{property.guests} personnes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} chambres</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  {property.amenities.slice(0, 3).map((amenity, i) => (
                    <div key={i} className="flex items-center space-x-1 text-xs bg-[#EADD8E]/20 px-2 py-1 rounded-full">
                      {getAmenityIcon(amenity)}
                      <span className="text-[#252525]">{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-[#252525]">{property.price.toLocaleString()} {property.currency}</span>
                    <span className="text-sm text-gray-600">/nuit</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-[#252525]">{property.rating}</span>
                    {renderStars(property.rating)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}