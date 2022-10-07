import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    key="desc"
                    name="description"
                    content="Shivangam Soni's Portfolio Website. Shivangam Soni is a Self-Taught Web Developer."
                />
                <link rel="icon" href="/favicon.ico" />

                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,900,900italic&display=optional"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Source+Code+Pro:200,300,regular,500,600,700,800,900,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic&display=optional"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <div id="modal" />
                <NextScript />
            </body>
        </Html>
    );
}
