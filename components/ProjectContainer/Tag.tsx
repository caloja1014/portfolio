import React from "react";

const Tag = ({
    name,
    className
}: {
    name: string;
    className?: string;
}) => {
    return (
    <div className={`${className} flex justify-center items-center px-4 rounded-full bg-secondary`}>
        <span className="text-primary font-medium">{name}</span>
    </div>
    );
};

export default Tag;