import { type JSX } from "react";
import { type Projects, projectsData } from "../../../data/project";
import "./Project.css";

export default function Project(): JSX.Element {
    return (
        <div className="project-container">
            <div>
                <h2 className="project-header">Projects</h2>
            </div>
            {projectsData.map((proj, index) => (
                <ProjectCard key={index} {...proj} />
            ))}
        </div>
    );  
}

export function ProjectCard(props: Projects): JSX.Element {
    return (
        <div className="project-card">
            <p className="project-title">{props.title}</p>
            <p className="project-description">{props.description}</p>
        </div>
    );
}