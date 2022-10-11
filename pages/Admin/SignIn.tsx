import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";
import type { NextPageWithLayout } from "../_app";
import Head from "next/head";
import { unstable_getServerSession } from "next-auth";

import AdminLayout from "../../src/Layout/AdminLayout";
import { authOptions } from "../api/auth/[...nextauth]";
import AdminSignIn from "../../src/Admin/auth/SignIn";

const AdminSignInPage: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Shivangam Soni | Admin Panel</title>
            </Head>

            <AdminSignIn />
        </>
    );
};

AdminSignInPage.getLayout = (page: ReactElement) => {
    return <AdminLayout>{page}</AdminLayout>;
};

export default AdminSignInPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    // @ts-expect-error
    const session = await unstable_getServerSession(req, res, authOptions);

    if (session) {
        return {
            redirect: {
                destination: "/Admin/Skills",
                permanent: true,
            },
        };
    }

    return {
        props: {
            session: null,
        },
    };
};
