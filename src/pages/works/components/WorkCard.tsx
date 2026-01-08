import { useEffect, useState } from "react";
import RightArrow from "../../../icons/RightArrow";

type WorkCardProps = {
  imageSrc: string;
  imageAlt: string;
  number: number;
  subHeading: string;
  title: string[];
  performingGroup: string;
  genre: string;
  status: string;
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
}: WorkCardProps) => {
  const [animated, setAnimated] = useState(false);
  const [currentId, setCurrentId] = useState(0);
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
    const timer = setTimeout(() => {
      setAnimated(true);
      setLinesAnimated((prev) => ({ ...prev, [currentId]: true }));
      setCurrentId((prev) => prev + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animated) return;

    const timer = setInterval(() => {
      setLinesAnimated((prev) => ({ ...prev, [currentId]: true }));
      setCurrentId((prev) => prev + 1);
    }, 100);

    if (currentId === 8) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [currentId]);

  return (
    <>
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
              className="w-full group-hover:scale-105 transition-all duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 transition-opacity opacity-0 group-hover:opacity-100 duration-500 flex items-center overflow-hidden">
              <div className="w-full px-2">
                <div className="border-y border-white overflow-hidden">
                  <div className="animate-marquee whitespace-nowrap w-fit flex gap-2">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i + "marquee" + title} className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <span
                            key={j + "marquee" + title}
                            className="text-white font-semibold"
                          >
                            VIEW MORE
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
            <hr
              className={`h-1 transition-all duration-300 ${
                animated && linesAnimated[0] ? "w-full" : "w-0"
              }`}
            />
            <div className="font-bold text-3xl text-center w-full md:text-[3vw] md:text-start">
              {title.map((t, i) => (
                <h2 key={i + t}>{t}</h2>
              ))}
            </div>
          </div>

          {/* Card details */}
          <div className="w-full text-center flex flex-col">
            <hr
              className={`h-1 transition-all duration-300 ${
                animated && linesAnimated[1] ? "w-full" : "w-0"
              }`}
            />
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="font-bold">Performing Group:</h3>
              <p>{performingGroup}</p>
            </div>
            <hr
              className={`h-1 transition-all duration-300 ${
                animated && linesAnimated[2] ? "w-full" : "w-0"
              }`}
            />
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="font-bold">Genre:</h3>
              <p>{genre}</p>
            </div>
            <hr
              className={`h-1 transition-all duration-300 ${
                animated && linesAnimated[3] ? "w-full" : "w-0"
              }`}
            />
            <div className="flex flex-col md:flex-row md:justify-between w-full">
              <h3 className="font-bold">Status:</h3>
              <div className="w-full md:w-[25vw] overflow-hidden">
                <div className="animate-marquee whitespace-nowrap w-max flex gap-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i + "marquee" + status} className="flex gap-2">
                      {Array.from({ length: 6 }).map((_, j) => (
                        <span key={j + "marquee" + status}>{status}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr
              className={`h-1 transition-all duration-300 ${
                animated && linesAnimated[4] ? "w-full" : "w-0"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[1.5vw] md:order-3 w-full">
          {/* Card button */}
          <button className="flex items-center justify-between w-full h-fit font-bold text-lg border-y-4 py-4 px-1 transition-all duration-500 cursor-pointer hover:px-2 hover:text-white hover:bg-black">
            View More
            <RightArrow />
          </button>

          {/* Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <hr
              className={`h-0.5 hidden transition-all duration-300 ${
                animated && linesAnimated[i] ? "w-full" : "w-0"
              } md:block`}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkCard;
