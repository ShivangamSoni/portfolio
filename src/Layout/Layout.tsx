import type { FC, ReactNode } from "react";

import { ThemeProvider } from "styled-components";

import THEME from "./Theme";
import { Wrapper } from "./Styled";
import Header from "../Site/Header/Header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={THEME}>
            <Wrapper>
                <Header />
                {children}
            </Wrapper>
        </ThemeProvider>
    );
};

export default Layout;
