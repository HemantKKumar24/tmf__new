"use client"

export function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{
          opacity: 1,
          objectPosition: 'center bottom',
        }}
      >
        <source src="/bg_video/Rahemath_Khan.mp4" type="video/mp4" />
        <source src="/gym-video.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/4753995/4753995-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
    </div>
  )
}

