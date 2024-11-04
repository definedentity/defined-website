import React from "react";
import { AboutMe } from "~/components/AboutMe";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ProjectContainer } from "~/components/ProjectContainer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <ProjectContainer />
      </main>
      <Footer />
    </>
  );
}
