import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import Head from "next/head";

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
    return page;
};

export default AdminSignInPage;
