import Topbar from "@/app/components/topbar/Topbar";
import React from "react";
import Homepage from "@/app/pages/homepage/Homepage";
import AboutMe from "@/app/pages/about-me/AboutMe";
import Technos from "@/app/pages/technologies/Technos";
import Experiences from "@/app/pages/experiences/Experiences";
import Projects from "@/app/pages/projects/Projects";
import Footer from "@/app/components/footer/footer";
import ContactMe from "@/app/pages/contact-me/ContactMe";
import {Certifications} from "@/app/pages/certifications/Certifications";

export default function Home() {
  return (
    <>
        <Topbar />
        <Homepage />
        <AboutMe />
        <Technos />
        <Certifications />
        <Experiences />
        <Projects />
        <ContactMe />
        <Footer />
    </>
  );
}
