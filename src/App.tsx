import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";



export default function App() {
  return (
    <div>
      <Slider />

    </div>
  );
}
const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const progressRef = useRef<HTMLDivElement | null>(null);
  const progressTl = useRef<gsap.core.Tween | null>(null);

  const slides = [
    <div key="1" className="slide active">Slide 1</div>,
    <div key="2" className="slide active">Slide 2</div>,
    <div key="3" className="slide active">Slide 3</div>,
    <div key="4" className="slide active">Slide 4</div>,
    <div key="5" className="slide active">Slide 5</div>,
  ];

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);

  useEffect(() => {
    if (!playing) {
      return undefined;
    }
    intervalRef.current = window.setInterval(() => goTo(index + 1), 3000);
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [index, playing]);
  useEffect(() => {
    if (!progressRef.current) return;

    progressTl.current?.kill();

    progressTl.current = gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power2.out" }
    );
  }, [index]);
    useEffect(() => {
    if (!progressTl.current) return;
    playing ? progressTl.current.play() : progressTl.current.pause();
  }, [playing]);

  return (
    <div className="slider">
      <div className="top-bar">
      
        <div className="left-controls">
          <div className="dots">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button onClick={() => setPlaying(!playing)}>
            {playing ? "⏸" : "▶"}
          </button>
        </div>

        <div className="right-controls">
          <button onClick={() => goTo(index - 1)}>‹</button>
          <button onClick={() => goTo(index + 1)}>›</button>
        </div>
      </div>

      {/* <div className="slides">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
          >
            {slide}
            
          </div>
        ))}
      </div> */}
            <div className="progress-bar">
          <div ref={progressRef} className="fill" />
        </div>
            <div className="progress-bar">
          <div ref={progressRef} className="fill" />
        </div>
            <div className="progress-bar">
          <div ref={progressRef} className="fill" />
        </div>
            <div className="progress-bar">
          <div ref={progressRef} className="fill" />
        </div>
    </div>
  );
};

