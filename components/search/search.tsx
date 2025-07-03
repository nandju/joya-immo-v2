"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const popularDestinations = [
  "Dubai, UAE",
  "Bali, Indonesia",
  "Tokyo, Japan",
  "Paris, France",
  "New York, USA",
  "London, UK",
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          className="flex items-center mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-4">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Search Destinations</h1>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Where to?</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search destinations"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Add dates" className="pl-10" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Add guests" className="pl-10" />
              </div>
            </div>
          </div>

          <Link href="/properties">
            <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {popularDestinations.map((destination, index) => (
              <Link key={destination} href="/properties">
                <motion.button
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left w-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="w-5 h-5 text-pink-500 mb-2" />
                  <p className="font-medium text-gray-900">{destination}</p>
                </motion.button>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
