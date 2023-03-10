import Image from "next/image";
import React, { useState } from "react";
import { StaticImageData } from "next/image";

import LaptopPlaceHolder from "../../public/images/placeholder/laptop.png";
import MobileVerticalPlaceHolder from "../../public/images/placeholder/mobile_vertical.png";
import MobileHorizontalPlaceHolder from "../../public/images/placeholder/mobile_horizontal.png";
import {FiExternalLink} from "react-icons/fi";
import Tag from "./Tag";

const ProjectContainer = ({
  title,
  description,
  technologies,
  link,
  githubLink,
  imgLink,
  isMobile,
  isVertical,
  className,
}: {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
  imgLink: StaticImageData;
  isMobile: boolean;
  isVertical: boolean;
  className?: string;
}) => {

  return (
    <div className={`${className} flex flex-col-reverse lg:flex-row`}>
      <div className="md:min-w-[500px] md:w-[500px] flex justify-center items-center relative">
        <div 
        className={
          `absolute flex  justify-center ${
            isMobile
              ? (isVertical
                ? "top-0  min-h-[520px] max-h-[520px] "
                : "top-[10px] sm:min-h-[210px] sm:max-h-[210px] w-full")
              : "top-[16px] h-full w-full "
          }`
        }
        >
          <Image
            src={imgLink}
            alt="Project Image"
            width={isMobile ? (
              isVertical ? 250 : 438
            ) : 375}
            height={isMobile ? (
              isVertical ? 100 : 300
            ) : 300}
            className={
              `${
                isMobile
                  ? (isVertical
                    ? "rounded-[40px]"
                    : "w-[90%] sm:w-[80%] md:w-[90%]   rounded-[20px]")
                  : "w-3/4 sm:w-[70%] md:w-3/4  h-[80%]"
              }`
            }
          />
        </div>
        <div className="z-10">
          <Image
            src={
              isMobile
                ? (isVertical
                  ? MobileVerticalPlaceHolder
                  : MobileHorizontalPlaceHolder)
                : LaptopPlaceHolder
            }
            alt="Project Image"
            width={isMobile ? (
              isVertical ? 300 : 500
            ) : 600}
            height={isMobile ? (
              isVertical ? 500 : 300
            ) : 300}
          />
        </div>
      </div>
      <div className="flex flex-col pr-8">
        <h2 className="font-bold text-2xl mb-4">{title}</h2>
        <div className="flex  lg:flex-col flex-col-reverse">
          <p className="mb-4">{description}</p>
          <div>
          <div className="flex flex-wrap">
            {technologies.map((tech, index) => {
              return <Tag key={index} name={tech} className="mr-4 mb-3" />;
            })}
          </div>
          {
            link && (
              <FiExternalLink 
              className="text-2xl text-primary  cursor-pointer" 
              onClick={() => {
                window.open(link, "_blank");
              }}
              />
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
