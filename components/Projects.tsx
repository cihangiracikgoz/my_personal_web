const projects = [
  {
    title: "QBot",
    description:
      "A gamified classroom quiz platform built in a team of 6. Developed the React frontend with role-based dashboards, a levelled progression map, and live quiz sessions over WebSockets. Supports multiple question formats with text-to-speech and rewards to keep young learners engaged.",
  },
  {
    title: "Morse Decoder using Raspberry Pi",
    description:
      "My team and I turned a Raspberry Pi into a Morse code decoder. You tap a button and it figures out your dots and dashes, showing letters on a 7-segment display with buzzer and LED feedback. A fun dive into embedded C, GPIO, and digital logic.",
  },
  {
    title: "Masked Warrior",
    description:
      "A 2-day game jam project built in Godot. An action-adventure where a warrior fights through enemies to save the princess. My team and I designed combat, level progression, and narrative pacing under a tight deadline which made every decision count.",
  },
  {
    title: "Computer Vision Gesture Classifier",
    description:
      "Point your webcam and strike a Jujutsu Kaisen character pose, this system recognises it in real time. Built with Python, MediaPipe, and OpenCV for tracking with a Random Forest classifier trained on custom landmark data to predict gestures.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col md:flex-row justify-center items-center py-12 md:py-20 px-6 md:px-[100px] gap-10 md:gap-[100px] min-h-screen text-[var(--foreground)]"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-2xl md:text-[30px] font-medium whitespace-nowrap">Projects</h2>
      </div>
      <div className="flex flex-col gap-4 self-center max-w-[550px] w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-row rounded-lg overflow-hidden bg-[var(--muted)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-[3px] bg-[var(--accent)] shrink-0" />
            <div className="px-5 py-4">
              <h3 className="text-sm md:text-[15px] font-semibold">{project.title}</h3>
              <p className="text-xs md:text-[13px] mt-1.5 leading-snug text-[var(--muted-foreground)]">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
