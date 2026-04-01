import './Journey.css';

const milestones = [
    {year: 2002, event: 'Born in Ankara, Turkey'},
    {year: 2012, event: 'Qualified to compete in my first regional and international fencing tournaments, securing several notable achievements'},
    {year: 2016, event: 'Earned admission to Vali Muammer Guler Social Sciences High School, on the basis of my TEOG examination results'},
    {year: 2021, event: 'Graduated from high school with a cumulative average of 80,54, achieving 97,83 in final-year Mathematics'},
    {year: 2024, event: 'Commenced my undergraduate studies in Computer Science at University of Surrey'}
];

export default function Journey() {
    return (
        <section id='journey' className='journey'>
            <div className='journey-title-box'>
                <h2 className='journey-title'>My Journey</h2>
            </div>
            <div className='timeline'>
                {milestones.map((m) => (
                    <div key={m.year} className='timeline-item'>
                        <div className='timeline-year'>{m.year}</div>
                        <p className='timeline-event'>{m.event}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}