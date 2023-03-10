import React from "react";

import TitlePage from "@/components/TitlePage";
import SocialIcon from "@/components/SocialIcon";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "@/styles/Home.module.css";

const contactLinks = [
  {
    Icon: AiFillGithub,
    link: "https://github.com/caloja1014",
    description: "@caloja1014",
  },
  {
    Icon: AiOutlineTwitter,
    link: "https://twitter.com/caloja1014",
    description: "@caloja1014",
  },
  {
    Icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/carlosloja/",
    description: "@carlosloja",
  },
  {
    Icon: HiMail,
    link: "mailto:caloja@espol.edu.ec",
    description: "caloja@espol.edu.ec",
  },
];

const Contact = () => {
  const { t } = useTranslation('common')

  return (
    <main className={styles.main}>
      <div className="md:mt-8">
        <TitlePage
          title={t("contact.title")}
          description={t("contact.subtitle")}
        />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center md:mt-32">
        {contactLinks.map(({ Icon, link, description }, index) => {
          return (
            <SocialIcon
              key={index}
              Icon={Icon}
              link={link}
              description={description}
              className="md:mx-10 my-2"
            />
          );
        })}
      </div>
    </main>
  );
};

export default Contact;
export async function getStaticProps({ locale }:{locale:string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}