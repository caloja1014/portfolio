import React from "react";
import Head from "next/head";

const TitlePage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-primary mb-2 text-center">{title}</h1>
        <div className="border-b-4 h-1 border-secondary w-[60px] mb-4 "></div>
        <p className="text-base text-primary opacity-50	text-center">{description}</p>
      </div>
    </>
  );
};

export default TitlePage;
