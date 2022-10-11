import type { FC, ReactNode } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Wrapper } from "./Styled";
import Header from "../Site/Header/Header";
import { useRouter } from "next/router";

const variants = {
    scaleDown: {
        scale: 0.5,
        y: 100,
        backgroundImage:
            "linear-gradient(45deg,hsla(150, 100%, 50%, .5),hsla(220, 100%, 50%, .5))",
        transition: {
            duration: 0.4,
        },
    },
    scaleUp: {
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.5,
        },
    },
    center: {
        scale: 0.8,
        x: 0,
        transformOrigin: "top",
        transition: {
            duration: 0.4,
        },
    },
    out: {
        x: "100%",
        transition: {
            duration: 0.4,
            delay: 0.5,
        },
    },
    in: {
        scale: 0.8,
        y: 100,
        x: "-100%",
        transition: {
            duration: 0.4,
        },
    },
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const { pathname } = useRouter();

    return (
        <Wrapper>
            <Header />
            <AnimatePresence initial={false} mode="wait">
                <motion.main
                    key={pathname}
                    variants={variants}
                    initial="in"
                    animate={["center", "scaleUp"]}
                    exit={["scaleDown", "out"]}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </Wrapper>
    );
};

export default Layout;
