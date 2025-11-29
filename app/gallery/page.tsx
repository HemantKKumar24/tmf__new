"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Image as ImageIcon, Video, Grid3x3, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Gallery items - using images from public folder
const galleryItems = [
  { id: 1, type: "image", src: "/bg_pic/1.png", title: "Gym Facility" },
  { id: 2, type: "image", src: "/bg_pic/2.png", title: "Training Area" },
  { id: 3, type: "image", src: "/bg_pic/3.png", title: "Equipment" },
  { id: 4, type: "image", src: "/bg_pic/11.jpeg", title: "Workout Zone" },
  { id: 5, type: "image", src: "/bg_pic/13.jpeg", title: "Fitness Center" },
  { id: 6, type: "image", src: "/bg_pic/14.jpeg", title: "Training Session" },
  { id: 7, type: "image", src: "/bg_pic/16.jpeg", title: "Gym Interior" },
  { id: 8, type: "image", src: "/bg_pic/18.jpeg", title: "Exercise Area" },
  { id: 9, type: "image", src: "/bg_pic/19.jpeg", title: "Fitness Equipment" },
  { id: 10, type: "image", src: "/bg_pic/20.jpeg", title: "Training Space" },
  { id: 11, type: "video", src: "/bg_video/bg_video.mp4", title: "Gym Tour" },
  { id: 12, type: "video", src: "/bg_video/Rahemath_Khan.mp4", title: "Trainer Profile" },
]

type FilterType = "all" | "image" | "video"

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterType>("all")

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter)

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Gallery</h1>
            <p className="text-xl text-gray-300">
              Explore our state-of-the-art facilities and see what makes TEAM MUSCLE FITNESS special
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="relative py-8 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setFilter("all")}
                variant={filter === "all" ? "default" : "outline"}
                className={`${
                  filter === "all"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800"
                }`}
              >
                <Grid3x3 className="mr-2 h-4 w-4" />
                All
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setFilter("image")}
                variant={filter === "image" ? "default" : "outline"}
                className={`${
                  filter === "image"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800"
                }`}
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                Images
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setFilter("video")}
                variant={filter === "video" ? "default" : "outline"}
                className={`${
                  filter === "video"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800"
                }`}
              >
                <Video className="mr-2 h-4 w-4" />
                Videos
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-400">No items found in this category.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden bg-gray-800 border-gray-700 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20">
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        {item.type === "image" ? (
                          <>
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white font-semibold">{item.title}</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <video
                              src={item.src}
                              className="w-full h-full object-cover"
                              muted
                              loop
                              playsInline
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center cursor-pointer"
                              >
                                <Play className="h-8 w-8 text-white ml-1" fill="white" />
                              </motion.div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-white font-semibold">{item.title}</p>
                            </div>
                          </>
                        )}
                        <div className="absolute top-4 right-4">
                          {item.type === "image" ? (
                            <div className="w-10 h-10 rounded-full bg-red-600/80 backdrop-blur-sm flex items-center justify-center">
                              <ImageIcon className="h-5 w-5 text-white" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-red-600/80 backdrop-blur-sm flex items-center justify-center">
                              <Video className="h-5 w-5 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

