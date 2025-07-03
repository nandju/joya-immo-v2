"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Heart, Grid3X3, List, Filter, MapPin, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { properties } from "../data/property"
import { categories } from "../data/property"



export default function PropertyPage() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) => (prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]))
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <Star className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.header
        className="bg-white shadow-sm border-b"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/">
                <motion.button className="text-2xl font-bold text-pink-500" whileHover={{ scale: 1.05 }}>
                  🏠 aceplace
                </motion.button>
              </Link>
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-gray-600">EN</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <Link href="/search">
                <div className="relative cursor-pointer">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search"
                    className="pl-10 bg-gray-100 border-0 focus:bg-white cursor-pointer"
                    readOnly
                  />
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-sm text-gray-600 hover:text-gray-900">
                Buy
              </Button>
              <Button variant="ghost" className="text-sm text-gray-600 hover:text-gray-900">
                Sell
              </Button>
              <Button variant="ghost" className="text-sm text-gray-600 hover:text-gray-900">
                Rent
              </Button>
              <Button variant="ghost" className="text-sm text-gray-600 hover:text-gray-900">
                Contact us
              </Button>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-600">🇺🇸 USD</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              <Link href="/login">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-full">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Categories */}
      <motion.div
        className="bg-white border-b"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-4 overflow-x-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  category.active ? "bg-pink-500 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {category.active && <Grid3X3 className="w-4 h-4" />}
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
          className="flex items-center justify-between mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="text-lg font-semibold text-gray-900">Dubai City, Jumeirah</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Dubai City, Jumeirah Villa</h1>
            <p className="text-gray-600 mt-1">649 Villas available in Dubai City</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-lg border p-1">
              <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
                <List className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Property Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
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
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                  {property.type}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{property.name}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {property.guests} guests • {property.bedrooms} bedrooms
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">From {property.price} USD</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-gray-900">{property.rating}</span>
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
