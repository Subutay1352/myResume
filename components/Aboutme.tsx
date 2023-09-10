import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I am an Embedded/IoT Software Developer with 4+ years of experience. As an 
          Embedded/IoT Software Developer; I design and develop firmware and
          software for various embedded and IoT devices, using C, C++ and Python.
          I have experience in working with bare metal and RTOS platforms,
          as well as wireless communication technologies such as BLE and WiFi.
          I completed multiple certifications in C, C++, embedded software, hardware
          architecture and microcontroller programming which demonstrating my passion
          and commitment to learning and improving my skills. 
          Additionally, I have desktop and mobile application development skills using
          C#WF, Xamarin, and Android Java, as well as data analysis and visualization 
          skills using Numpy, Matplotlib, and PyQt. I am highly motivated to apply my 
          knowledge and expertise to create innovative and impactful solutions for the 
          Embedded/IoT industry. In addition to my technical skills, I am a strong 
          communicator and team player. I am able to work
          effectively with cross-functional teams and am comfortable taking on
          new challenges and learning new technologies as needed.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
