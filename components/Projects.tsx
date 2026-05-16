const projects = [
  {
    title: "Morse Decoder using Raspberry Pi",
    description:
      "Me and my team developed a Morse code decoder using a Raspberry Pi, implementing precise button input timing to distinguish dots and dashes, and displaying decoded letters on a 7-segment display. Integrated a buzzer and RGB LED for real-time audio-visual feedback, and used a potentiometer to adjust input time limits. Applied concepts of digital logic design, GPIO interfacing and embedded C programming.",
  },
  {
    title: "Dottify",
    description:
      "Developed a full-stack Django web application for a music-streaming platform used by artists, customers, and admins. Designed a relational data model for albums, songs, playlists, ratings, and comments using ORM techniques. Implemented secure authentication and role-based authorization, enabling subscription access and admin controls. Built a RESTful API alongside server-rendered HTML views using templating.",
  },
  {
    title: "Masked Warrior",
    description:
      "Co-developed a 2-day action-adventure game prototype in Godot Engine using GDScript, centred on a warrior traversing hostile environments to save a princess. Designed and implemented core gameplay mechanics, including enemy encounters, combat flow, and level progression under strict time constraints. Collaborated on game design, asset integration, and narrative pacing as part of a rapid, multidisciplinary game jam team.",
  },
  {
    title: "Computer Vision Gesture Classifier",
    description:
      "Built a real-time gesture recognition system in Python using MediaPipe and OpenCV to detect and classify anime-inspired hand and body poses from a live webcam feed. Designed and trained a Random Forest classifier (scikit-learn) on custom pose landmark data, achieving multi-class gesture prediction.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-[100px] min-h-screen text-[var(--text-primary)]"
    >
      <h2 className="text-[30px] font-medium">Projects</h2>
      <div className="mt-10 grid grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-[var(--accent)]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all duration-300"
          >
            <div className="h-[3px] bg-[var(--accent)]" />
            <div className="p-8">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-[15px] mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
