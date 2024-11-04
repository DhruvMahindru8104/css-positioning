import React from 'react'

function Hero() {
  return (
    <>
<div className="h-screen w-full  relative overflow-hidden">
  {/* Background Image with a dark overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      filter: "brightness(0.1)", // Darkens the image
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-4xl font-bold">
    <p>Hello, how are you?</p>
    <p>Welcome to my website!</p>
  </div>
</div>

     </>
  )
}

export default Hero
