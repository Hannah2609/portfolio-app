import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedDiv from "./animatedDiv";

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
    <div className="px-4 py-2 rounded-full dark:bg-zinc-900 bg-zinc-200 dark:text-zinc-300 text-zinc-700 font-medium text-sm">
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
    <AnimatedDiv>
      <article className="overflow-hidden mb-16 md:mb-30">
        <div className="relative w-full aspect-[16/12] group overflow-hidden card-hover-target">
          <Link href={href} target="none">
            <Image
              src={imageSrc}
              alt="project image"
              fill
              className="object-cover h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="py-4">
          <h3 className="text-3xl md:text-4xl mb-4">{title}</h3>
          <p className="text-base md:text-md lg:text-lg mb-6 text-zinc-700 dark:text-zinc-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {pills.map((pillText, index) => (
              <Pill key={index} label={pillText} />
            ))}
          </div>
        </div>
      </article>
    </AnimatedDiv>
  );
};

export default Card