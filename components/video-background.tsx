"use client"

import { useState, useEffect } from "react"

export function VideoBackground() {
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    // Check if video can be loaded
    const video = document.createElement("video")
    video.src = "/gym-video.mp4"
    video.onerror = () => setVideoError(true)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
          onError={() => setVideoError(true)}
        >
          <source src="/gym-video.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/4753995/4753995-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      ) : (
        <div 
          className="w-full h-full bg-gradient-to-br from-red-950 via-black to-red-950"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-red-950/60 to-black/80"></div>
    </div>
  )
}

