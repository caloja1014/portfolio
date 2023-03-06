import React from "react";

const TechContainer = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <div className={`${className} py-2 px-4 bg-tertiary rounded-lg text-primary font-semibold`}>
      {name}
    </div>
  );
};

export default TechContainer;
