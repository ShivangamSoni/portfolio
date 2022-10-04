import Head from "next/head";

import Resume from "../src/Resume";

export default function ResumePage() {
    return (
        <>
            <Head>
                <title>Shivangam Soni | Resume</title>
            </Head>

            <Resume />
        </>
    );
}
