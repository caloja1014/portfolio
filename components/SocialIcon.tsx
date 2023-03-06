import React from "react";
import { IconType } from "react-icons";
import styles from '../styles/SocialIcon.module.css'

const SocialIcon = ({
  Icon,
  link,
  description,
  className
}: {
  Icon: IconType;
  link: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <div
        onClick={() => window.open(link, "_blank")}
        className="cursor-pointer md:mb-8 mb-4 text-tertiary rounded-full p-4 bg-primary"
      >
        <Icon
         className={styles.iconSize}
         />
      </div>
      <p className="text-center text-primary font-semibold">{description}</p>
    </div>
  );
};

export default SocialIcon;
