import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Bass Instruments"
          subTitle="Embedded Software Developer 2022 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Sayron Electronic"
          subTitle="R&D Engineer 2021 - 2022"
          icon={<SiToptal />}
        />
      </div>
    </div>
  );
};

export default Experience;
