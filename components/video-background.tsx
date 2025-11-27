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
          opacity: 0.4,
          objectPosition: 'center ',
        }}
      >
        {/* <source src="/bg_video/Rahemath_Khan.mp4" type="video/mp4" /> */}
        <source src="/bg_video/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
    </div>
  )
}

