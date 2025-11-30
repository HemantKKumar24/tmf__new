"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Star, Quote, User, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useEffect } from "react"

interface TestimonialModalProps {
  isOpen: boolean
  onClose: () => void
  testimonial: {
    id: number
    name: string
    image: string
    rating: number
    comment: string
    plan: string
    months: number
    trainer?: string
  } | null
}

export function TestimonialModal({ isOpen, onClose, testimonial }: TestimonialModalProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
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

  if (!testimonial) return null

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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-2 border-red-600/50 rounded-2xl shadow-2xl pointer-events-auto">
              {/* Close Button */}
              <Button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 h-12 w-12 rounded-full bg-black/80 hover:bg-red-600/90 text-white border-2 border-red-600/50 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-2xl"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-12">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-6 mb-8 pb-8 border-b border-red-600/30"
                >
                  <Avatar className="h-20 w-20 border-4 border-red-600/50">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback className="bg-red-600/20 text-red-400 text-2xl font-bold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{testimonial.name}</h3>
                    <div className="flex items-center gap-4 mb-3">
                      <Badge className="bg-red-600/20 text-red-400 border border-red-600/50 px-3 py-1">
                        {testimonial.plan}
                      </Badge>
                      {testimonial.trainer && (
                        <Badge variant="outline" className="border-red-600/50 text-red-400 px-3 py-1">
                          <User className="h-3 w-3 mr-1" />
                          Trainer: {testimonial.trainer}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Member for {testimonial.months} {testimonial.months === 1 ? "month" : "months"}</span>
                      </div>
                      <Badge variant="outline" className="border-green-600/50 text-green-400 text-xs">
                        Verified Member
                      </Badge>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-red-600/50 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-6 border-t border-red-600/30 text-center"
                >
                  <p className="text-sm text-gray-400">
                    Thank you for being part of the TEAM MUSCLE FITNESS family! 💪
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

