import { type JSX } from "react";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";

export default function ExpAndProject(): JSX.Element {
  return (  
    <section id="experiences-and-projects" className="exp-and-project-section">
      <Experience />
      <Project />
    </section>
  );
}