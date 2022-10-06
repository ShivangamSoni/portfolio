import type { AppProps } from "next/app";
import Head from "next/head";

import "../src/Common/globalStyles.css";
import Layout from "../src/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Shivangam Soni</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
