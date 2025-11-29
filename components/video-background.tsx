"use client"

export function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover 
          scale-[2.5] sm:scale-[2] md:scale-[1.5] lg:scale-100
          object-[center_-20%] sm:object-[center_0%] md:object-[center_50%] lg:object-[center_40%] 
          transition-all duration-700"
        style={{
          opacity: 0.4,
          minHeight: '100%',
          minWidth: '100%',
        }}
      >
        {/* <source src="/bg_video/Rahemath_Khan.mp4" type="video/mp4" /> */}
        <source src="/bg_video/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
    </div>
  )
}

