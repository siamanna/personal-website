import { FiYouTube, FiDevpost, FiGithub, FiLinkedIn } from "react-icons/fi";

import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/javascript.png";
import SkillImg3 from "./assets/img/skills/typescript.png";
import SkillImg4 from "./assets/img/skills/react.png";
import SkillImg5 from "./assets/img/skills/java.png";
import SkillImg6 from "./assets/img/skills/sql.png";
import SkillImg7 from "./assets/img/skills/python.png";
import SkillImg8 from "./assets/img/skills/c.png";
import SkillImg9 from "./assets/img/skills/swift.png";

export const navigation = [
    {
        name: "home",
        href: "home",
    },
    {
        name: "about",
        href: "about",
    },
    {
        name: "portfolio",
        href: "portfolio",
    },
    {
        name: "contact",
        href: "contact",
    },
];

export const social = [
    {
        icon: <FiYouTube />,
        href: "https://www.youtube.com/@SiaManna2003",
        color: "text-red-500",
        colorHover: "hover:text-red-900",
    },
    {
        icon: <FiDevpost />,
        href: "https://devpost.com/siamanna",
        color: "text-blue-500",
        colorHover: "hover:text-blue-900",
    },
    {
        icon: <FiGithub />,
        href: "https://github.com/siamanna",
        color: "text-white",
        colorHover: "hover:text-gray-500",
    },
    {
        icon: <FiLinkedIn />,
        href: "https://www.linkedin.com/in/sia-manna/",
        color: "text-blue-500",
        colorHover: "hover:text-blue-900",
    },
];

export const skills = [
    {
        image: SkillImg1,
    },
    {
        image: SkillImg2,
    },
    {
        image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
        image: SkillImg6,
    },
    {
        image: SkillImg7,
    },
    {
        image: SkillImg8,
    },
    {
        image: SkillImg9,
    },
];
export const sections = [
    {
        title: "Undergraduate Researcher",
        content: "I assist in image labeling to analyze environmental patterns, monitor changes in snow and ice coverage, and enhance understanding of climate impacts on these fragile systems."
    },
    {
        title: "University Tour Guide",
        content: "I facilitate tours around the enginnering building at the University of New Hampshire."
    }
]