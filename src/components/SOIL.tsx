import React from 'react'

export default function SOIL() {
  const letters = ["S", "O", "I", "L"];

  return (
    <div className="relative w-full sm:w-full flex justify-center">
      <video loop autoPlay muted className="w-full h-auto">
        <source
          src="/src/assets/SOIL_h264_big_250612-100.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
          ml-8
          md:mr-8
            flex 
            gap-6        /* mobile */
            sm:gap-8     /* ≥640px */
            md:gap-28    /* ≥768px */
            lg:gap-50!    /* ≥1024px */
            xl:gap-50!
          "
        >
          {letters.map((l, i) => (
            <div
              key={i}
              className="letter-container lora"
              style={{ ["--delay" as any]: `${i * 0.05}s` }}
            >
              <h1 className="letter">{l}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
