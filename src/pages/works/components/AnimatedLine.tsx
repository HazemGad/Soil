const AnimatedLine = ({
  shown,
  className,
}: {
  shown: boolean;
  className?: string;
}) => {
  return (
    <hr
      className={`h-1 transition-all duration-300 ${
        shown ? "w-full" : "w-0"
      } ${className}`}
    />
  );
};

export default AnimatedLine;
