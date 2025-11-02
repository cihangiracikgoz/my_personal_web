import { type JSX } from "react";
import {type ExperienceCardProps, experiencesData } from "../../../data/experience";
import "./Experience.css";

export default function Experience(): JSX.Element {
    return (
        <div className="experience-container">
            <div className="experience-header-container">
                <h2 className="experience-header">Experiences</h2>
            </div>
            {experiencesData.map((exp, index) => (
                <ExperienceCard key={index} index={index} {...exp}/>
            ))}
        </div>
    );  
}

export function ExperienceCard(props: ExperienceCardProps): JSX.Element {
    return (
        <div className={`experience-card experience-card-${props.index + 1}`}>
            <p className="experience-role">{props.role}</p>
            <p className="experience-company">{props.company}</p>
            <p className="experience-location">{props.location}</p>
            <p className="experience-duration">{props.duration}</p>
        </div>
    );
}