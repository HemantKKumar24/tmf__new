"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

interface GalleryLightboxProps {
  isOpen: boolean
  onClose: () => void
  item: {
    id: number
    type: "image" | "video"
    src: string
    title: string
  } | null
  onNext?: () => void
  onPrevious?: () => void
  hasNext?: boolean
  hasPrevious?: boolean
}

export function GalleryLightbox({ isOpen, onClose, item, onNext, onPrevious, hasNext = false, hasPrevious = false }: GalleryLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right, 0 for initial


  // Handle navigation with direction tracking
  const handleNext = () => {
    if (onNext) {
      setDirection(1)
      onNext()
    }
  }

  const handlePrevious = () => {
    if (onPrevious) {
      setDirection(-1)
      onPrevious()
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowRight" && onNext && hasNext) {
        handleNext()
      } else if (e.key === "ArrowLeft" && onPrevious && hasPrevious) {
        handlePrevious()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious])

  // Auto-play video when opened
  useEffect(() => {
    if (isOpen && item?.type === "video" && videoRef.current) {
      // Set muted for autoplay to work
      videoRef.current.muted = true
      setIsMuted(true)
      
      // Try to play
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.log("Video autoplay failed:", error)
            setIsPlaying(false)
          })
      }
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }, [isOpen, item])

  // Prevent body scroll when lightbox is open
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

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch(() => {
          // Fullscreen might fail, that's okay
        })
      } else {
        document.exitFullscreen()
      }
    }
  }

  // Reset direction when item changes
  useEffect(() => {
    if (item) {
      // Small delay to allow animation to start
      const timer = setTimeout(() => setDirection(0), 100)
      return () => clearTimeout(timer)
    }
  }, [item])

  return (
    <AnimatePresence>
      {isOpen && item && (
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

          {/* Lightbox Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col items-center justify-center pointer-events-auto">
              {/* Title at Top */}
              <AnimatePresence mode="wait">
                {item && (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 text-center"
                  >
                    <h3 className="text-xl md:text-3xl font-bold text-white font-heading drop-shadow-2xl bg-black/70 px-6 py-3 rounded-full backdrop-blur-md border-2 border-red-600/50 shadow-2xl">
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-50 h-12 w-12 rounded-full bg-black/80 hover:bg-red-600/90 text-white border-2 border-red-600/50 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-2xl"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </Button>
              </motion.div>

              {/* Navigation Buttons */}
              {hasPrevious && onPrevious && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-black/80 hover:bg-red-600/90 text-white border-2 border-red-600/50 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-2xl"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-7 w-7" />
                  </Button>
                </motion.div>
              )}

              {hasNext && onNext && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 h-14 w-14 rounded-full bg-black/80 hover:bg-red-600/90 text-white border-2 border-red-600/50 backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-2xl"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-7 w-7" />
                  </Button>
                </motion.div>
              )}

              {/* Content with slide animation */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  {item && (
                    <motion.div
                      key={item.id}
                      custom={direction}
                      initial={{ 
                        opacity: 0, 
                        x: direction === 1 ? 100 : direction === -1 ? -100 : 0,
                        scale: 0.9
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: direction === 1 ? -100 : direction === -1 ? 100 : 0,
                        scale: 0.9
                      }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                        />
                      ) : (
                        <div className="relative w-full max-w-6xl">
                          <video
                            ref={videoRef}
                            src={item.src}
                            className="w-full h-auto max-h-[75vh] rounded-lg shadow-2xl"
                            controls={false}
                            autoPlay
                            loop
                            playsInline
                            muted={isMuted}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onLoadedData={() => {
                              // Ensure video plays when data is loaded
                              if (videoRef.current && !isPlaying) {
                                videoRef.current.play().catch(() => {
                                  // Autoplay might be blocked
                                })
                              }
                            }}
                          />
                          
                          {/* Custom Video Controls */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 rounded-b-lg"
                          >
                            <div className="flex items-center justify-center gap-4">
                              {/* Play/Pause Button */}
                              <Button
                                onClick={togglePlayPause}
                                className="h-14 w-14 rounded-full bg-red-600/90 hover:bg-red-700 text-white border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl"
                                aria-label={isPlaying ? "Pause" : "Play"}
                              >
                                {isPlaying ? (
                                  <Pause className="h-7 w-7" fill="white" />
                                ) : (
                                  <Play className="h-7 w-7 ml-1" fill="white" />
                                )}
                              </Button>

                              {/* Mute/Unmute Button */}
                              <Button
                                onClick={toggleMute}
                                className="h-14 w-14 rounded-full bg-black/80 hover:bg-red-600/90 text-white border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                              >
                                {isMuted ? (
                                  <VolumeX className="h-6 w-6" />
                                ) : (
                                  <Volume2 className="h-6 w-6" />
                                )}
                              </Button>

                              {/* Fullscreen Button */}
                              <Button
                                onClick={toggleFullscreen}
                                className="h-14 w-14 rounded-full bg-black/80 hover:bg-red-600/90 text-white border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl"
                                aria-label="Fullscreen"
                              >
                                <Maximize2 className="h-6 w-6" />
                              </Button>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

