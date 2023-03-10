import React from "react";

import TitlePage from "@/components/TitlePage";
import MerakiImg from "../public/images/projects/meraki.png";
import SpaceTravelerImg from "../public/images/projects/space_traveller.png";
import DeaImg from "../public/images/projects/dea.png";
import MotorizadoImg from "../public/images/projects/motorizado_1.png";
import WidsImg from "../public/images/projects/wids.png";
import ProjectContainer from "@/components/ProjectContainer";

import styles from "@/styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next'

const projectList = [
  {
    title: "projects.meraki.title",
    description:
      "projects.meraki.description",
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
    title: "projects.spaceTravelers.title",
    description:
      "projects.spaceTravelers.description",
    technologies: [
      "Adobe XD",
    ],
    link: "https://2021.spaceappschallenge.org/challenges/statements/the-trail-to-mars-can-you-keep-your-crew-alive/teams/space-travelers-1/project",
    githubLink: "",
    imgLink: SpaceTravelerImg,
    isMobile: true,
    isVertical: false,
  },
  {
    title: "projects.deaApp.title",
    description:
      "projects.deaApp.description",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Figma"
    ],
    link: "https://play.google.com/store/apps/details?id=com.dea.come_app",
    githubLink: "",
    imgLink: DeaImg,
    isMobile: true,
    isVertical: true,
  },
  {
    title: "projects.widsWebsite.title",
    description:
      "projects.widsWebsite.description",
    technologies: [
      "Drupal",
      "Apache"
    ],
    link: "https://2021.wids.espol.edu.ec/",
    githubLink: "",
    imgLink: WidsImg,
    isMobile: false,
    isVertical: true,
  },
  {
    title: "projects.motorizadoApp.title",
    description:
      "projects.motorizadoApp.description",
    technologies: [
      "Ionic",
      "TypeScript",
      "Firebase"
    ],
    link: "",
    githubLink: "",
    imgLink: MotorizadoImg,
    isMobile: true,
    isVertical: true,
  },
];

const Projects = () => {
  const { t } = useTranslation('common')

  return (
    <main className={styles.main}>
      <div className="md:mt-8">
        <TitlePage
          title={t("projects.title")}
          description={t("projects.subtitle")}
        />
      </div>
      <div>
        {
            projectList.map(({
              title,
              description,
              ...rest
            }, index) => {
                return (
                <ProjectContainer 
                key={index} 
                title={t(title)}
                description={t(description)}
                {...rest} 
                className="my-10" />)
            })
        }
      </div>
    </main>
  );
};

export default Projects;
export async function getStaticProps({ locale }:{locale:string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}