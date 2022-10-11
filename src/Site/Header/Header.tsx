import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

import LINKS from "./Constants";
import {
    Hamburger,
    Icon,
    Label,
    NavLink,
    LinksList,
    ListItem,
    Nav,
    Slit,
    Wrapper,
} from "./Styled";

const Header: FC = () => {
    const { pathname } = useRouter();
    const isTabletQuery = useMediaQuery({ query: "(max-width: 1000px)" });
    const [show, setShow] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        setIsTablet(isTabletQuery);
    }, [isTabletQuery]);

    const toggle = () => setShow((prev) => !prev);

    return (
        <Wrapper>
            <Nav show={isTablet && show}>
                <LinksList>
                    {LINKS.map(({ id, label, icon: LinkIcon, href }, idx) => (
                        <ListItem key={id} onClick={toggle} idx={idx}>
                            <Link href={href} passHref>
                                <NavLink
                                    className={
                                        pathname === href ? "active" : ""
                                    }
                                >
                                    <Icon>
                                        <LinkIcon />
                                    </Icon>
                                    <Label>{label}</Label>
                                </NavLink>
                            </Link>
                        </ListItem>
                    ))}
                </LinksList>
            </Nav>

            {isTablet && (
                <Hamburger
                    onClick={toggle}
                    title={show ? "Hide NavBar" : "Open NavBar"}
                    open={show}
                >
                    <Slit />
                    <Slit />
                    <Slit />
                </Hamburger>
            )}
        </Wrapper>
    );
};

export default Header;
