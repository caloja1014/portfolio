import React from "react";
import TechContainer from "./TechContainer";

const TechnologiesContainer = ({
  techs,
  title,
  className,
}: {
  techs: string[];
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`
        ${className}`}
    >
      <h2 className="mb-4 font-semibold text-primary">{title}</h2>
      <div className="flex flex-wrap">
        {techs.map((tech, index) => {
          return <TechContainer key={index} name={tech} className="mr-4 mb-3" />;
        })}
      </div>
    </div>
  );
};

export default TechnologiesContainer;
