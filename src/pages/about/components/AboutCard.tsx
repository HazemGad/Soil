import useInView from "@hooks/useInView";

export default function RuledPaper() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative p-8 leading-8 transition-all duration-1000 h-64 bg-no-repeat bg-top-left ${
        inView ? "bg-size-[100%_100%]" : "bg-size-[0%_100%]"
      }`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0, transparent calc(2rem - 1px), black 2rem)",
      }}
    >
      <p>test</p>
      <br />
      <p>test</p>
      <p>test</p>
    </div>
  );
}
