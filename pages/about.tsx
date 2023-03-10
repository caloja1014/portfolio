import React from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TechnologiesContainer from "@/components/TechnologiesContainer";
import TitlePage from "@/components/TitlePage";

import styles from "@/styles/Home.module.css";

const techs = [
    {
        title: 'Frameworks',
        techs: ['React', 'Next.js', 'Flutter', 'Django', 'Express.js', 'Angular', 'Ionic']
    },
    {
        title: 'Programming Languages',
        techs: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Dart', 'C']
    }
];

const About = () => {
  const { t } = useTranslation('common')
  return (
    <main className={styles.main}>
      <div className="md:mt-8">
        <TitlePage
          title={t("about.title")}
          description={t("about.subtitle")}
        />
      </div>
      <div className="flex mt-8 flex-col md:flex-row">
        <div className="md:w-1/2 py-2 md:px-8">
          <h1 className="text-2xl font-bold mb-4">{t("about.knowMe")}</h1>
          <p className="text-left mb-6">
            {t("about.descriptionKnowMeOne")}
            <br></br>
            {t("about.descriptionKnowMeTwo")}
          </p>
          <button className='px-16 py-2 text-xl '>
            <Link
                href="/contact"
            >{t("menu.contact")}</Link>
          </button>

        </div>
        <div className="md:w-1/2 py-2 md:px-8">
            <h1 className="text-2xl font-bold mb-4">{t("about.skills")}</h1>
            {techs.map(({title,techs}, index) => {
                return <TechnologiesContainer 
                key={index} 
                title={title} 
                techs={techs} 
                className="mb-8"
                />
            })}
        </div>
      </div>
    </main>
  );
};

export default About;
export async function getStaticProps({ locale }:{locale:string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}