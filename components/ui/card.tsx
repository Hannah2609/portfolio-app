import React from "react";
import Image from "next/image";
import Link from "next/link";


interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  pills?: string[];
  href?: string;
}

interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <div className="px-4 py-2 rounded-full dark:bg-zinc-900 bg-zinc-100 dark:text-white text-black font-medium text-sm">
      {label}
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  pills = [],
  href = "#",
}) => {
  return (
    <div className="overflow-hidden mb-20">
      <div className="relative w-full aspect-[16/12]">
        <Link href={href}>
          <Image
            src={imageSrc}
            alt="project image"
            fill
            className="object-cover h-full w-full"
          />
        </Link>
      </div>
      <div className="py-4">
        <h2 className="text-2xl mb-2">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {pills.map((pillText, index) => (
            <Pill key={index} label={pillText} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card