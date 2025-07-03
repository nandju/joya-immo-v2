import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Search, MapPin, Calendar, Users } from "lucide-react"

const popularDestinations = [
  "Abidjan, Côte d'Ivoire",
  "Yamoussoukro, Côte d'Ivoire", 
  "Bouaké, Côte d'Ivoire",
  "Daloa, Côte d'Ivoire",
  "San-Pédro, Côte d'Ivoire",
  "Korhogo, Côte d'Ivoire",
  "Man, Côte d'Ivoire",
  "Gagnoa, Côte d'Ivoire",
  "Grand-Bassam, Côte d'Ivoire"
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [bedrooms, setBedrooms] = useState("")

  const handleSearch = () => {
    console.log("Recherche:", { searchQuery, checkIn, bedrooms })
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#EADD8E]/20 to-[#A07539]/10"
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
          <button className="mr-4 p-2 hover:bg-white/20 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#252525]" />
          </button>
          <h1 className="text-3xl font-bold text-[#252525]">Rechercher des destinations</h1>
        </motion.div>

        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-[#EADD8E]/30"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#252525] mb-2">Où aller ?</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A07539] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher des destinations"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A07539] focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#252525] mb-2">Arrivée</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A07539] w-5 h-5" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A07539] focus:border-transparent transition-colors"
                />
              </div>
            </div>

          <div>
            <label className="block text-sm font-medium text-[#252525] mb-2">Nombre de chambres</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A07539] w-5 h-5" />
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A07539] focus:border-transparent transition-colors appearance-none"
              >
                <option value="">Chambre</option>
                <option value="1">1 chambre</option>
                <option value="2">2 chambres</option>
                <option value="3">3 chambres</option>
                <option value="4">4 chambres</option>
                <option value="5+">5+ chambres</option>
              </select>
            </div>
          </div>

          </div>

          <motion.button
            onClick={handleSearch}
            className="w-full mt-6 py-3 bg-[#A07539] hover:bg-[#252525] text-white rounded-lg font-medium transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search className="w-4 h-4 mr-2" />
            Rechercher
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-[#252525] mb-4">Destinations populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularDestinations.map((destination, index) => (
              <motion.button
                key={destination}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all text-left w-full border border-[#EADD8E]/30 hover:border-[#A07539]/50 group"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => setSearchQuery(destination)}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-[#EADD8E]/20 rounded-lg group-hover:bg-[#A07539]/20 transition-colors">
                    <MapPin className="w-5 h-5 text-[#A07539]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#252525] group-hover:text-[#A07539] transition-colors">
                      {destination.split(',')[0]}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {destination.split(',')[1]}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Section suggestion basée sur la recherche */}
        {searchQuery && (
          <motion.div
            className="mt-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-[#252525] mb-4">
              Suggestions pour "{searchQuery}"
            </h3>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#EADD8E]/30">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#EADD8E]/20 rounded-lg">
                  <Search className="w-5 h-5 text-[#A07539]" />
                </div>
                <div>
                  <p className="font-medium text-[#252525]">Recherche personnalisée</p>
                  <p className="text-sm text-gray-600">
                    Trouvez des logements correspondant à votre recherche
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}