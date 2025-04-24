"use client"
import React from 'react'
import Card from './ui/card'
import AnimatedDiv from './animatedDiv';

function Projects() {
  return (
    <section>
      <AnimatedDiv>
        <h2 className="text-6xl mb-20">
          Projects{" "}
          <span className="text-8xl leading-0 dark:text-zinc-700 text-zinc-300">
            .
          </span>
        </h2>
        </AnimatedDiv>
        
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-20 my-10">
          <Card
            href="https://katjakrogh.pythonanywhere.com/"
            imageSrc="/volt.png"
            title='"volt" Exam project'
            description="Exam project for Web Development course 1 semester. Group project, therefore my groupmembers deployment is linked. - To log in: Create an account or log in with user: admin@fulldemo.com, password: password"
            pills={["Python", "Database design", "MySQL"]}
          />

          <Card
            href="/"
            imageSrc="/mia.png"
            title="Mia Willaume"
            description="Freelance project for an artist. Custom theme on wordpress."
            pills={["Wordpress", "Design", "Custom theme"]}
          />
        </div>
    
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 mb-10">
          <Card
            href="/"
            imageSrc="/omada.png"
            title="Omada wine & deli"
            description="Assignment during multimedia design. "
            pills={["Graphic design", "Website", "bookingsystem"]}
          />
          <Card
            href="/"
            imageSrc="/mockup-nbsm.png"
            title="Nails By Sascha Malina"
            description="Last exam project for Multimedia Design. Designed and developed a website and booking-system for a nail artist."
            pills={["Next.js", "Concept", "Database", "Design"]}
          />
        </div>
    
  
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-20 mb-10">
          <Card
            href="/"
            imageSrc="/tommis.png"
            title="Tommis Burger Joint"
            description="2 semester exam project for Multimedia Design"
            pills={["Next.js", "Koncept", "bookingsystem"]}
          />
          <Card
            href="/"
            imageSrc="/toDo.png"
            title="Small todo app"
            description="Small todo app"
            pills={["Next.js", "Koncept", "bookingsystem"]}
          />     
        </div>

    </section>
  );
}

export default Projects