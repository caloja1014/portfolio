import React from "react";
import Link from "next/link";

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
  return (
    <main className={styles.main}>
      <div className="md:mt-8">
        <TitlePage
          title="About me"
          description="Here you will find information about me and my skills"
        />
      </div>
      <div className="flex mt-8 flex-col md:flex-row">
        <div className="md:w-1/2 py-2 md:px-8">
          <h1 className="text-2xl font-bold mb-4">Get to know me</h1>
          <p className="text-left mb-6">
            Hello! My name is Carlos Loja, I’m a Mobile and Full Stack
            Developer. Since I started my career as a computer science engineer,
            I have felt a great passion for programming, and I am also one of
            the people who thinks that a good project makes the programmer, that
            is why I am always willing to accept new challenges and solve them,
            with the highest possible quality. 
            <br></br>
            I’m open to job opportunities or
            independent projects where I can contribute, grow, learn and share
            my knowledge with others. If you have a good opportunity that is
            related to my skills and experience, don’t hesitate to contact me.
          </p>
          <button className='px-16 py-2 text-xl '>
            <Link
                href="/contact"
            >Contact</Link>
          </button>

        </div>
        <div className="md:w-1/2 py-2 md:px-8">
            <h1 className="text-2xl font-bold mb-4">My skills</h1>
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
