"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CardFormDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function CardFormDialog({ isOpen, onClose }: CardFormDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    socialMedia: ""
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('📝 [Form] Soumission du formulaire...')
    console.log('📦 [Form] Données:', formData)
    
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Envoyer les données à l'API route Resend
      console.log('🚀 [Form] Envoi vers /api/send-card-request...')
      const response = await fetch('/api/send-card-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('📡 [Form] Réponse reçue, status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json()
        console.error('❌ [Form] Erreur HTTP:', errorData)
        throw new Error(errorData.details || 'Erreur lors de l\'envoi')
      }

      const result = await response.json()
      console.log('✅ [Form] Succès!', result)
      
      setSubmitStatus("success")
      
      // Réinitialiser le formulaire
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        businessName: "",
        socialMedia: ""
      })

      // Fermer le dialogue après 2 secondes
      setTimeout(() => {
        onClose()
        setSubmitStatus("idle")
      }, 2000)

    } catch (error: any) {
      console.error("❌ [Form] Erreur lors de l'envoi:")
      console.error("Type:", error?.constructor?.name)
      console.error("Message:", error?.message)
      console.error("Stack:", error?.stack)
      console.error("Détails complets:", error)
      setSubmitStatus("error")
    } finally {
      console.log('🏁 [Form] Fin de la soumission')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[#1a1a2e] rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative px-6 sm:px-8 md:px-10 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-4 border-b border-white/10">
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                >
                  Get Your <span className="text-[#F06A2A]">Free Card</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm sm:text-base text-white/70 mt-2"
                >
                  Fill in your details to receive your personalized card
                </motion.p>
                
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-white/50 hover:text-white transition-colors duration-300 group"
                  aria-label="Close dialog"
                >
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label
                      htmlFor="fullName"
                      className={`block text-sm sm:text-base font-medium mb-2 transition-colors duration-300 ${
                        focusedField === "fullName" ? "text-[#F06A2A]" : "text-white/80"
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[#282936] border border-white/10 rounded-lg text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-[#F06A2A] focus:ring-1 focus:ring-[#F06A2A] transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email and Phone Number - Row on larger screens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label
                        htmlFor="email"
                        className={`block text-sm sm:text-base font-medium mb-2 transition-colors duration-300 ${
                          focusedField === "email" ? "text-[#F06A2A]" : "text-white/80"
                        }`}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[#282936] border border-white/10 rounded-lg text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-[#F06A2A] focus:ring-1 focus:ring-[#F06A2A] transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label
                        htmlFor="phoneNumber"
                        className={`block text-sm sm:text-base font-medium mb-2 transition-colors duration-300 ${
                          focusedField === "phoneNumber" ? "text-[#F06A2A]" : "text-white/80"
                        }`}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phoneNumber")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[#282936] border border-white/10 rounded-lg text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-[#F06A2A] focus:ring-1 focus:ring-[#F06A2A] transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </motion.div>
                  </div>

                  {/* Business Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      htmlFor="businessName"
                      className={`block text-sm sm:text-base font-medium mb-2 transition-colors duration-300 ${
                        focusedField === "businessName" ? "text-[#F06A2A]" : "text-white/80"
                      }`}
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("businessName")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[#282936] border border-white/10 rounded-lg text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-[#F06A2A] focus:ring-1 focus:ring-[#F06A2A] transition-all duration-300"
                      placeholder="Your Business Name"
                    />
                  </motion.div>

                  {/* Social Media Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <label
                      htmlFor="socialMedia"
                      className={`block text-sm sm:text-base font-medium mb-2 transition-colors duration-300 ${
                        focusedField === "socialMedia" ? "text-[#F06A2A]" : "text-white/80"
                      }`}
                    >
                      Social Media Link
                    </label>
                    <input
                      type="url"
                      id="socialMedia"
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("socialMedia")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-[#282936] border border-white/10 rounded-lg text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-[#F06A2A] focus:ring-1 focus:ring-[#F06A2A] transition-all duration-300"
                      placeholder="https://instagram.com/yourbusiness"
                    />
                  </motion.div>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                  >
                    <p className="text-green-400 text-sm sm:text-base text-center font-medium">
                      ✓ Votre demande a été envoyée avec succès !
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                  >
                    <p className="text-red-400 text-sm sm:text-base text-center font-medium">
                      ✗ Une erreur est survenue. Veuillez réessayer.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 relative px-6 sm:px-8 py-3 sm:py-4 bg-[#F06A2A] text-white text-sm sm:text-base font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,106,42,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </span>
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/20 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>

          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.05);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(240, 106, 42, 0.5);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(240, 106, 42, 0.7);
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  )
}
