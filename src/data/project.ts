type projects = {
    title: string;
    description: string;
}

export const projectsData: projects[] = [
    {
        title: "Morse Decoder using Raspberry Pi",
        description: "Me and my team developed a Morse code decoder using a Raspberry Pi Pico, implementing precise button input timing to distinguish dots and dashes, and displaying decoded letters on a 7-segment display. Integrated a buzzer and RGB LED for real-time audio-visual feedback, and used a potentiometer to adjust input time limits. Applied concepts of digital logic design, GPIO interfacing and embedded C programming."
    },
    {
        title: "FlickFinder",
        description: "Developed a RESTful API for accessing and querying a movie database, built with Java using the Javalin web framework and SQLite. Implemented multiple endpoints to retrieve movie and person data, following clean architecture and separation of concerns. Designed an in-memory test database for automated testing with JUnit, Mockito and Rest-Assured, ensuring reliability and maintainability. "
    },
];