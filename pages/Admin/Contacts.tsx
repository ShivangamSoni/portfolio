import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

import AdminLayout from "../../src/Layout/AdminLayout";
import connectToDB from "../../server/utils/connectToDB";
import Contact from "../../server/models/Contact";
import ContactsComp, { IContacts } from "../../src/Admin/Contacts";

const AdminContactsPage: NextPageWithLayout<{ contacts: IContacts[] }> = ({
    contacts,
}) => {
    return (
        <>
            <Head>
                <title>Shivangam Soni | Admin Panel</title>
            </Head>

            <ContactsComp contacts={contacts} />
        </>
    );
};

AdminContactsPage.getLayout = (page: ReactElement) => {
    return <AdminLayout>{page}</AdminLayout>;
};

export default AdminContactsPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    // @ts-expect-error
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
        return {
            redirect: {
                destination: "/Admin/SignIn",
                permanent: true,
            },
        };
    }

    await connectToDB();

    const contacts = await Contact.find({});

    const contactsProp = contacts.map(
        ({ id, name, email, subject, message, responded }) => ({
            id,
            name,
            email,
            subject,
            message,
            responded,
        }),
    );

    return {
        props: {
            session: JSON.parse(JSON.stringify(session)),
            contacts: contactsProp,
        },
    };
};
