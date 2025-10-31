export type Icons = {
    instagram: string;
    linkedin: string;
    github: string;
}

export type Profile = {
    name: string;
    education: string;
    picture: {
        src: string;
        alt: string;
    };
    icons: Icons;
}

export const profile: Profile = {
    name: "Cihangir Acikgoz",
    education: "BSc Computer Science at University of Surrey",
    picture: {
        src: "",
        alt: "Professional Profile Picture",
    },
    icons: {
        instagram: "https://www.instagram.com/cihangiracikgoz/",
        linkedin: "https://www.linkedin.com/in/cihangiracikgoz/",
        github: "https://github.com/cihangiracikgoz",
    }
}