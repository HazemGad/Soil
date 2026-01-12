import { useEffect, useState } from "react";
import RightArrow from "../../../icons/RightArrow";
import useInView from "../../../hooks/useInView";
import AnimatedLine from "./AnimatedLine";
import AnimatedButton from "./AnimatedButton";

type WorkCardProps = {
  imageSrc: string;
  imageAlt: string;
  number: number;
  subHeading: string;
  title: string[];
  performingGroup: string;
  genre: string;
  status: string;
  statusMarqueeNumber?: number;
  inPlanning?: boolean;
};

const WorkCard = ({
  imageSrc,
  imageAlt,
  number,
  subHeading,
  title,
  performingGroup,
  genre,
  status,
  statusMarqueeNumber = 2,
  inPlanning = false,
}: WorkCardProps) => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const [linesAnimated, setLinesAnimated] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  useEffect(() => {
    if (!inView) return;

    let currentId = 0;
    const interval = setInterval(() => {
      setLinesAnimated((prev) => {
        const next = { ...prev, [currentId]: true };
        return next;
      });

      currentId++;

      if (currentId >= Object.keys(linesAnimated).length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="w-full" ref={ref}>
      {/* Card name and number */}
      <div className="flex justify-between items-center text-sm border-t-4 pt-2 w-full md:border-t-8">
        <p className="font-extrabold">{number}.</p>
        <p className="font-semibold">{subHeading}</p>
      </div>

      <div className="w-full flex flex-col gap-8 md:gap-4 md:flex-row md:items-end">
        {/* Card image */}
        <div className="flex justify-center items-center md:order-2 md:w-2/3 overflow-hidden rounded">
          <div className="relative group w-1/3 md:w-full overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`w-full transition-all duration-500 group-hover:scale-105 ${
                inView
                  ? "[clip-path:polygon(0_100%,100%_100%,100%_0,0_0)]"
                  : "[clip-path:polygon(0_100%,100%_100%,100%_100%,0_100%)]"
              } `}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 transition-opacity opacity-0 group-hover:opacity-100 duration-500 flex items-center overflow-hidden">
              <div className="w-full px-2">
                <div className="border-y border-white overflow-hidden">
                  <div className="animate-marquee whitespace-nowrap w-fit flex gap-2">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div
                        key={i + "marquee" + title}
                        className="flex gap-2 me-2"
                      >
                        {Array.from({ length: 5 }).map((_, j) => (
                          <span
                            key={j + "marquee" + number}
                            className="text-white font-semibold"
                          >
                            View More
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full md:order-1">
          {/* Card title */}
          <div className="flex flex-col gap-2 w-full">
            <AnimatedLine
              shown={inView && linesAnimated[0]}
              className="md:order-1"
            />

            {inPlanning && (
              <p className="text-center md:text-start border w-fit self-center px-2 rounded text-sm md:order-0 md:self-start mb-2">
                In the planning stages
              </p>
            )}

            <div className="font-bold text-3xl text-center w-full md:text-[3vw] md:text-start md:order-2">
              {title.map((t, i) => (
                <h2 key={i + t}>{t}</h2>
              ))}
            </div>
          </div>

          {/* Card details */}
          <div className="w-full text-center flex flex-col">
            <AnimatedLine shown={inView && linesAnimated[1]} />

            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="font-bold">Performing Group:</h3>
              <p>{performingGroup}</p>
            </div>

            <AnimatedLine shown={inView && linesAnimated[2]} />

            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="font-bold">Genre:</h3>
              <p>{genre}</p>
            </div>

            <AnimatedLine shown={inView && linesAnimated[3]} />

            <div className="flex flex-col md:flex-row md:justify-between w-full">
              <h3 className="font-bold">Status:</h3>
              <div className="w-full md:w-[25vw] overflow-hidden">
                <div className="animate-marquee whitespace-nowrap w-max flex gap-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i + "marquee" + status}
                      className="flex gap-2 me-2"
                    >
                      {Array.from({ length: statusMarqueeNumber }).map(
                        (_, j) => (
                          <span key={j + "marquee" + status}>{status}</span>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <AnimatedLine shown={inView && linesAnimated[4]} />
          </div>
        </div>

        <div className="flex flex-col gap-[1.5vw] md:order-3 w-full">
          {/* Card button */}
          <AnimatedButton>
            View More
            <RightArrow />
          </AnimatedButton>

          <div className="hidden md:flex flex-col gap-5">
            {/* Lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <AnimatedLine
                shown={inView && linesAnimated[i]}
                key={"line" + i + number}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
