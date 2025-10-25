import { type JSX } from "react";
import { GiPathDistance } from "react-icons/gi";
import "./Journey.css";

type TimelineEvent = {
    year: string;
    description: string;
}

const timelineEvents: TimelineEvent[] = [
    { year: "2002", description: "Born in Ankara, Turkey." },
    { year: "2012", description: "Qualified to compete in my first regional and international fencing tournaments, securing several notable achievements." },
    { year: "2016", description: "Earned admission to Vali Muammer Guler Social Sciences High School on the basis of my TEOG examination results." },
    { year: "2021", description: "Graduated from Vali Muammer Guler Social Sciences High School with a cumulative average of 80,54, achieving 97,83 in final-year Mathematics." },
    { year: "2024", description: "Commenced undergraduate studies in Computer Science at University of Surrey." },
];


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

function Timeline(): JSX.Element {
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