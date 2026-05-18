const milestones = [
  {
    year: 2002,
    event: "Born in Ankara, Turkey",
  },
  {
    year: 2012,
    event:
      "Qualified to compete in my first regional and international fencing tournaments, securing several notable achievements",
  },
  {
    year: 2016,
    event:
      "Earned admission to Vali Muammer Guler Social Sciences High School, on the basis of my TEOG examination results",
  },
  {
    year: 2021,
    event:
      "Graduated from high school with a cumulative average of 80,54, achieving 97,83 in final-year Mathematics",
  },
  {
    year: 2024,
    event:
      "Commenced my undergraduate studies in Computer Science at University of Surrey",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="flex flex-row justify-center py-20 px-[100px] gap-[100px] min-h-screen"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-[30px] font-medium text-[var(--foreground)] whitespace-nowrap">
          My Journey
        </h2>
      </div>
      <div className="flex flex-col border-l-[3px] border-[var(--foreground)] gap-[50px] self-center">
        {milestones.map((m) => (
          <div key={m.year} className="flex items-center gap-10 pl-[50px]">
            <div className="text-[25px] font-semibold text-[var(--foreground)] min-w-[80px]">
              {m.year}
            </div>
            <p className="text-[15px] text-[var(--foreground)] pl-5 max-w-[400px]">
              {m.event}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
