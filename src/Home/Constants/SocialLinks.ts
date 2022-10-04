import {
    BsGithub as GitHub,
    BsLinkedin as LinkedIn,
    BsStackOverflow as StackOverflow,
} from "react-icons/bs";
import { AiOutlineCodepen as CodePen } from "react-icons/ai";

const SOCIAL_LINKS = [
    {
        id: 1,
        label: "GitHub",
        Icon: GitHub,
        iconColor: "#fff",
        link: "https://www.github.com/ShivangamSoni",
    },
    {
        id: 2,
        label: "LinkedIn",
        Icon: LinkedIn,
        iconColor: "#0077b1",
        link: "https://www.linkedin.com/in/shivangam-soni",
    },
    {
        id: 5,
        label: "CodePen",
        Icon: CodePen,
        iconColor: "#fff",
        link: "https://codepen.io/ShivangamSoni",
    },
    {
        id: 4,
        label: "StackOverflow",
        Icon: StackOverflow,
        iconColor: "#f48024",
        link: "https://stackoverflow.com/users/16659219/shivangam-soni",
    },
];

export default SOCIAL_LINKS;
