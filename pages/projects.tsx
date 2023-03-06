import React from "react";

import TitlePage from "@/components/TitlePage";
import MerakiImg from "../public/images/projects/meraki.png";
import SpaceTravelerImg from "../public/images/projects/space_traveller.png";
import DeaImg from "../public/images/projects/dea.png";
import ProjectContainer from "@/components/ProjectContainer";

import styles from "@/styles/Home.module.css";

const projectList = [
  {
    title: "Meraki Gift",
    description:
      "A manageable web system for the Meraki Gift venture where you can enter your products, information and contact.",
    technologies: [
      "Angular",
      "Express JS",
      "TypeScript",
      "Javascript",
      "Figma",
    ],
    link: "",
    githubLink: "",
    imgLink: MerakiImg,
    isMobile: false,
    isVertical: false,
  },
  {
    title: "Space Travelers",
    description:
      "A prototype of a game focused on learning the hazards that the astronauts could pass on  a trip to Mars.",
    technologies: [
      "Figma",
    ],
    link: "",
    githubLink: "",
    imgLink: SpaceTravelerImg,
    isMobile: true,
    isVertical: false,
  },
  {
    title: "DEA App",
    description:
      "DEA App is a mobile and desktop application using Flutter for the mobile part and Electron for desktop.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Figma"
    ],
    link: "",
    githubLink: "",
    imgLink: DeaImg,
    isMobile: true,
    isVertical: true,
  },
];

const Projects = () => {
  return (
    <main className={styles.main}>
      <div className="md:mt-8">
        <TitlePage
          title="Projects"
          description="Here you will find information about my projects"
        />
      </div>
      <div>
        {
            projectList.map((project, index) => {
                return (
                <ProjectContainer 
                key={index} 
                {...project} 
                className="my-10" />)
            })
        }
      </div>
    </main>
  );
};

export default Projects;