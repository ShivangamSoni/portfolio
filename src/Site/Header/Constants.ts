import { BiHomeCircle as Home } from "react-icons/bi";
import { SiAboutdotme as About } from "react-icons/si";
import { AiOutlineProfile as Resume } from "react-icons/ai";
import { MdOutlineConnectWithoutContact as Contact } from "react-icons/md";
import { VscTerminalBash as Terminal } from "react-icons/vsc";

const LINKS = [
    {
        id: 1,
        label: "Home",
        icon: Home,
        href: "/",
    },
    {
        id: 2,
        label: "About",
        icon: About,
        href: "/about",
    },
    {
        id: 3,
        label: "Resume",
        icon: Resume,
        href: "/resume",
    },
    {
        id: 4,
        label: "Contact",
        icon: Contact,
        href: "/contact",
    },
    // {
    //     id: 5,
    //     label: "Terminal",
    //     icon: Terminal,
    //     href: "/terminal",
    // },
];

export default LINKS;
