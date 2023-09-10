import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="C"
          link="https://www.w3schools.com/c/c_intro.php"
        />
        <SkillsInput title="C++" link="https://www.w3schools.com/cpp/cpp_intro.asp" />
        <SkillsInput title="Python" link="https://www.w3schools.com/python/python_intro.asp" />
        <SkillsInput title="BLE" link="https://medium.com/@muhamed.riyas/ble-an-overview-d524ceb73c94" />
        <SkillsInput title="WiFi" link="https://www.cisco.com/c/en/us/products/wireless/what-is-wifi.html" />
        <SkillsInput
          title="Google Firebase"
          link="https://firebase.google.com/"
        />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput
          title="Atom"
          link="https://github.blog/2022-06-08-sunsetting-atom/"
        />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="UI Design" link="https://www.figma.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
      </div>
    </div>
  );
};

export default Skills;
