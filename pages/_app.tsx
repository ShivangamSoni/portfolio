import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import Head from "next/head";

import "../src/Common/globalStyles.css";
import Layout from "../src/Layout/Layout";
import { ThemeProvider } from "styled-components";
import THEME from "../src/Layout/Theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ||
        ((page) => {
            return <Layout>{page}</Layout>;
        });

    return (
        <>
            <Head>
                <title>Shivangam Soni</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

            <ThemeProvider theme={THEME}>
                {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
        </>
    );
}
