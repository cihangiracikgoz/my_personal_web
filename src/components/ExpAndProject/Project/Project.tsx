import { type JSX } from "react";
import { type ProjectCardProps, projectsData } from "../../../data/project";
import "./Project.css";

export default function Project(): JSX.Element {
    return (
        <div className="project-container">
            <div className="project-header-container">
                <h2 className="project-header">Projects</h2>
            </div>
            {projectsData.map((proj, index) => (
                <ProjectCard key={index} index={index} {...proj} />
            ))}
        </div>
    );  
}

export function ProjectCard(props: ProjectCardProps): JSX.Element {
    return (
        <div className={`project-card project-card-${props.index + 1}`}>
            <p className="project-title">{props.title}</p>
            <p className="project-description">{props.description}</p>
        </div>
    );
}