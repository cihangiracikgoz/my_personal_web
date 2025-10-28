import { type JSX } from "react";
import { type experiences, experiencesData } from "../../../data/experience";
import "./Experience.css";

export default function Experience(): JSX.Element {
    return (
        <div className="experience-container">
            <div>
                <h2 className="experience-header">Experiences</h2>
            </div>
            {experiencesData.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
            ))}
        </div>
    );  
}

function ExperienceCard(exp: experiences): JSX.Element {
    return (
        <div className="experience-card">
            <p>{exp.role}</p>
            <p>{exp.company}</p>
            <p>{exp.location}</p>
            <p>{exp.duration}</p>
        </div>
    );
}