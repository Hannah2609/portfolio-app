"use client"
import React from 'react'
import Card from './card'
import AnimatedDiv from './animatedDiv';

function Projects() {
  return (
    <section className='mb-20'>
      <AnimatedDiv>
        <h2 className="text-5xl md:text-7xl mb-30">
          Projects
        </h2>
      </AnimatedDiv>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 my-10">
        <Card
          href="https://miawillaume.dk/"
          imageSrc="/mia.png"
          title="Mia Willaume"
          description="Freelance project for an artist. Customized a wordpress child-theme"
          pills={["Wordpress", "Custom theme", "PHP", "Figma"]}
        />
        <Card
          href="https://katjakrogh.pythonanywhere.com/"
          imageSrc="/volt.png"
          title="Volt"
          description="Group exam project for 1st semester Web Development. A Wolt-inspired food delivery app.
                        Log in: signup or use admin@fulldemo.com / password: password"
          pills={[
            "Python",
            "Login system",
            "MySQL",
            "role-based access control",
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-20 mb-10">
        <Card
          href="https://nbsm-website.vercel.app/"
          imageSrc="/mockup-nbsm.png"
          title="Nails By Sascha Malina"
          description="Final exam project for Multimedia Design. Designed and developed a website and booking system for a nail artist."
          pills={[
            "Next.js",
            "Concept",
            "Database",
            "Bookingsystem",
            "Logo design",
          ]}
        />
        <Card
          href="https://gruppe14omada.netlify.app/"
          imageSrc="/omada.png"
          title="Omada Wine & Deli"
          description="Website redesign and content strategy for Omada Wine & Deli. Created during Multimedia Design studies at KEA, including a full pitch and client presentation."
          pills={["Astro", "Content", "Redesign", "Figma"]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 mb-10">
        <Card
          href="https://todo-hannah.netlify.app/"
          imageSrc="/toDo.png"
          title="Mini to-do app"
          description="A simple to-do app developed with vanilla JavaScript and localStorage."
          pills={["Javascript", "LocalStorage", "Mini-project"]}
        />
        <Card
          href="https://tommisburgerjoint.netlify.app/"
          imageSrc="/tommis.png"
          title="Tommi's Burger Joint"
          description="2nd semester exam project. Website redesign and content creation for Tommi’s Burger Joint."
          pills={["Astro", "Redesign", "Content", "Figma"]}
        />
      </div>
    </section>
  );
}

export default Projects