import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Eye, EyeOff, Instagram, Facebook, Send, Youtube, MapPin } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("locataire") // locataire ou propriétaire
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    agreeToPrivacy: false
  })

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, userType })
  }

  return (
    <motion.div
      className="min-h-screen flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section gauche avec image de fond */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 relative"
        style={{
          backgroundImage: "url('/assets/images/backgrounds/background-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#252525]/80 to-[#A07539]/60" />
        
        {/* Logo */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/">
            <Image
              src="/assets/images/logo-sans-fond.png" // Remplace par le chemin réel vers ton logo
              alt="Logo Joya Immo"
              width={120}      // Ajuste selon la taille souhaitée
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Silhouette sur les montagnes */}
        {/* <div className="absolute top-1/3 left-1/3 z-10">
          <div className="w-16 h-16 bg-[#252525] rounded-full relative">
            <div className="absolute -bottom-8 -left-4 w-24 h-20 bg-[#252525] rounded-b-full" />
          </div>
        </div> */}

        {/* Contenu texte */}
        <div className="absolute bottom-20 left-8 right-8 z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Vous n'avez pas de<br />
              compte ?
            </h2>
            <p className="text-white/80">
            {/* < className="text-white/80 mb-6"> */}
            Créez votre compte pour profiter de toutes les fonctionnalités.<br />
            Que vous soyez à la recherche d’un bien ou propriétaire, tout est centralisé. Gratuit et simple !
            </p>
            
            {/* Icônes sociales */}
            {/* <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-white/70 hover:text-[#EADD8E] cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-white/70 hover:text-[#EADD8E] cursor-pointer transition-colors" />
              <Send className="w-6 h-6 text-white/70 hover:text-[#EADD8E] cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-white/70 hover:text-[#EADD8E] cursor-pointer transition-colors" />
              <MapPin className="w-6 h-6 text-white/70 hover:text-[#EADD8E] cursor-pointer transition-colors" />
            </div> */}
          </motion.div>
        </div>
      </motion.div>

      {/* Section droite avec formulaire */}
      <motion.div
        className="w-full lg:w-1/2 bg-gradient-to-br from-[#252525]/5 to-[#A07539]/10 flex items-center justify-center p-8"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <div className="w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-[#252525] mb-8 text-center">Inscription</h2>

            {/* Sélection du type d'utilisateur */}
            <div className="mb-6">
              <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    userType === "locataire" 
                      ? "bg-[#A07539] text-white" 
                      : "text-[#252525] hover:bg-gray-200"
                  }`}
                  onClick={() => setUserType("locataire")}
                >
                  Locataire
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    userType === "propriétaire" 
                      ? "bg-[#A07539] text-white" 
                      : "text-[#252525] hover:bg-gray-200"
                  }`}
                  onClick={() => setUserType("propriétaire")}
                >
                  Propriétaire
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#252525] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A07539] focus:border-transparent transition-colors"
                  placeholder="Entrez votre email"
                  required
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#252525] mb-2">
                  Nom d'utilisateur
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A07539] focus:border-transparent transition-colors"
                  placeholder="Choisissez un nom d'utilisateur"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#252525] mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A07539] focus:border-transparent transition-colors pr-12"
                    placeholder="Créez un mot de passe"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#A07539] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Doit contenir au moins 8 caractères
                </p>
              </div>

              <div className="flex items-center">
                <input
                  id="agreeToPrivacy"
                  name="agreeToPrivacy"
                  type="checkbox"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-[#A07539] border-gray-300 rounded focus:ring-[#A07539] focus:ring-2"
                  required
                />
                <label htmlFor="agreeToPrivacy" className="ml-2 text-sm text-[#252525]">
                  J'accepte la politique de confidentialité
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-[#A07539] text-white rounded-lg font-medium hover:bg-[#252525] transition-colors disabled:opacity-50"
                disabled={!formData.agreeToPrivacy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                S'inscrire
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#252525]/70">
                Vous avez déjà un compte ?{" "}
                <button className="text-[#A07539] hover:text-[#252525] font-medium transition-colors">
                  Se connecter
                </button>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}