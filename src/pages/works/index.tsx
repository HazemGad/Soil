import WorkCard from "./components/WorkCard";

const Works = () => {
  return (
    <div className="flex flex-col gap-8 p-3 items-center md:gap-2 md:p-6 md:justify-end">
      <WorkCard
        imageSrc="/src/assets/images/mononome_thumb.jpg"
        imageAlt={"ZEROKO MONONOME RE-CREATION VERSION"}
        number={1}
        subHeading={"ZEROKO MONONOME re-creation version"}
        title={["ZEROKO MONONOME", "RE-CREATION", "VERSION"]}
        performingGroup={"cube inc."}
        genre={"physical comedy"}
        status={"Inquires accepted."}
      />
    </div>
  );
};

export default Works;
