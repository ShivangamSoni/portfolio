import type { FC, ReactNode } from "react";

import { Wrapper } from "./Styled";
import Header from "../Site/Header/Header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    );
};

export default Layout;
