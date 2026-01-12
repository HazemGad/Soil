import WorkCard from "./components/WorkCard";

const Works = () => {
  return (
    <div className="flex flex-col gap-8 p-3 items-center md:gap-2 md:p-6 md:justify-end">
      <WorkCard
        imageSrc="/src/assets/images/mononome_thumb.jpg"
        imageAlt={"ZEROKO MONONOME re-creation version"}
        number={1}
        subHeading={"ZEROKO MONONOME re-creation version"}
        title={["ZEROKO MONONOME", "RE-CREATION", "VERSION"]}
        performingGroup={"cube inc."}
        genre={"physical comedy"}
        status={"Inquires accepted."}
        statusMarqueeNumber={6}
      />

      <WorkCard
        imageSrc="/src/assets/images/futureboyconan_thumb.jpg"
        imageAlt={"Future boy CONAN"}
        number={2}
        subHeading={"Future boy CONAN"}
        title={["FUTURE BOY", "CONAN"]}
        performingGroup={"HoriPro Inc"}
        genre={"Physical Theatre"}
        status={
          "Performance Availability: From 2027 onwards. Sales Format: Production / Licensing."
        }
      />

      <WorkCard
        imageSrc="/src/assets/images/inthiscorner_thumb.jpg"
        imageAlt={`Musical "Ib This Corner of the World"`}
        number={3}
        subHeading={`Musical "Ib This Corner of the World"`}
        title={["MUSICAL", `"IN THIS CORNER`, `OF THE WORLD"`]}
        performingGroup={"TOHO CO., LTD."}
        genre={"Musical"}
        status={"Looking for a presenter."}
        statusMarqueeNumber={6}
      />

      <WorkCard
        imageSrc="/src/assets/images/theunknowndancer_thumb.jpg"
        imageAlt={"The Unknown Dancer in the Neighborhood"}
        number={4}
        subHeading={"The Unknown Dancer in the Neighborhood"}
        title={["THE UNKNOWN", "DANCER", "IN THE NEIGHBORHOOD"]}
        performingGroup={"Theater Collective HANCHU-YUEI"}
        genre={"Drama/Dance"}
        status={
          "Open to performance rights, co-productions, and international casting."
        }
      />

      <WorkCard
        imageSrc="/src/assets/images/sonnet_thumb.jpg"
        imageAlt={"SONNET"}
        number={5}
        subHeading={"SONNET"}
        title={["SONNET"]}
        performingGroup={"Theater Company Awai"}
        genre={"Theater"}
        status={
          "Open to full productions, rights, and co-productions at any time."
        }
      />

      <WorkCard
        imageSrc="/src/assets/images/elninja_thumb.jpg"
        imageAlt={"EL NINJA VS. CYBORG DRAGON"}
        number={6}
        subHeading={"EL NINJA VS. CYBORG DRAGON"}
        title={["EL NINJA", "VS.", "CYBORG DRAGON"]}
        performingGroup={"Tokyo Broadcasting System Television"}
        genre={"A jump-into-the-story-experience"}
        status={"Open to IP licensing and co-commission opportunities."}
        inPlanning
      />

      <WorkCard
        imageSrc="/src/assets/images/shoulderpads_thumb.jpg"
        imageAlt={"1 Shoulder pads - GALAXY TRAIN - Japanese musical theatre"}
        number={7}
        subHeading={"1 Shoulder pads - GALAXY TRAIN - Japanese musical theatre"}
        title={[
          "1 SHOULDER PADS",
          "- GALAXY TRAIN -",
          "JAPANESE MUSICAL THEATRE",
        ]}
        performingGroup={"Shoulder pads"}
        genre={"Musical theatre"}
        status={
          "Available performance period: Summer 2026, or Summer to Autumn 2027."
        }
      />

      <WorkCard
        imageSrc="/src/assets/images/thetrafficsignal_thumb.jpg"
        imageAlt={"The Traffic Signal Ignoring Insects"}
        number={8}
        subHeading={"The Traffic Signal Ignoring Insects"}
        title={["THE TRAFFIC", "SIGNAL IGNORING", "INSECTS"]}
        performingGroup={"Theatrical Company Aokirimikan"}
        genre={"modern play"}
        status={
          "Open to full production sales, performance rights licensing, and co-productions."
        }
      />

      <WorkCard
        imageSrc="/src/assets/images/thesun_thumb-1.jpg"
        imageAlt={"The Sun"}
        number={9}
        subHeading={"The Sun"}
        title={["THE SUN"]}
        performingGroup={"Ikiume"}
        genre={"Full-Length Play, Drama"}
        status={
          "Performance rights available in English, Chinese and Korean; other languages on request."
        }
      />
    </div>
  );
};

export default Works;
