import React, { useState } from "react";

import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const socialList = [
  {
    name: "GitHub",
    Icon: AiFillGithub,
    link: "https://github.com/caloja1014",
  },
  {
    name: "Twitter",
    Icon: AiOutlineTwitter,
    link: "https://twitter.com/caloja1014",
  },
  {
    name: "LinkedIn",
    Icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/carlosloja/",
  },
];

const SocialBar = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        ${className} 
        md:flex flex-col items-center justify-center 
        fixed top-1/3 right-0 w-[80px] h-[350px] bg-primary
        ${
          isHovered
            ? "transform translate-x-0 ease-in duration-200"
            : "transform translate-x-10 ease-in duration-200"
        }
        hidden 
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      {socialList.map(({ Icon, link }, index) => (
        <div
          key={index}
          onClick={() => window.open(link, "_blank")}
          style={{
            color: "rgb(var(--color-tertiary))",
          }}
          className="cursor-pointer mb-8"
        >
          <Icon size={50} />
        </div>
      ))}
    </div>
  );
};

export default SocialBar;
