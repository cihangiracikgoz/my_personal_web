import { type JSX } from "react";
import { type Experiences, experiencesData } from "../../../data/experience";
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

export function ExperienceCard(props: Experiences): JSX.Element {
    return (
        <div className="experience-card">
            <p className="experience-role">{props.role}</p>
            <p className="experience-company">{props.company}</p>
            <p className="experience-location">{props.location}</p>
            <p className="experience-duration">{props.duration}</p>
        </div>
    );
}