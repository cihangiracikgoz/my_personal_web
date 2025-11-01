import { type JSX } from "react";
import { GiPathDistance } from "react-icons/gi";
import { timelineEvents } from "../../data/timeline";
import "./Journey.css";

export default function Journey(): JSX.Element {
    return (
        <section id="journey" className="journey-section">
            <div className="journey-header">
                <GiPathDistance className="journey-icon" />
                <h2 className="journey-title">My Journey</h2>
            </div>
            <Timeline />
        </section>
    );
}

export function Timeline(): JSX.Element {
    return (
        <div className="timeline">
            {timelineEvents.map((event, index) => (
                <div key={index} className="timeline-event">
                    <div className="timeline-year">{event.year}</div>
                    <div className="timeline-description">{event.description}</div>
                </div>
            ))}
        </div>
    );
}