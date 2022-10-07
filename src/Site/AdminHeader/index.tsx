import Link from "next/link";
import type { FC } from "react";

import { Wrapper, Title, Nav, Anchor, Item } from "./Styled";

const AdminHeader: FC = () => {
    return (
        <Wrapper>
            <Title>Admin Panel</Title>

            <Nav>
                <Item>
                    <Link href="/Admin/Skills" passHref>
                        <Anchor>Skills</Anchor>
                    </Link>
                </Item>
                <Item>
                    <Link href="/Admin/Projects" passHref>
                        <Anchor>Projects</Anchor>
                    </Link>
                </Item>
                <Item>
                    <Link href="/Admin/Contacts" passHref>
                        <Anchor>Contacts</Anchor>
                    </Link>
                </Item>
            </Nav>
        </Wrapper>
    );
};

export default AdminHeader;
