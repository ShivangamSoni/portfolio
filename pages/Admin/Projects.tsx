import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

import AdminLayout from "../../src/Layout/AdminLayout";
import connectToDB from "../../server/utils/connectToDB";
import Project from "../../server/models/Project";
import ProjectsComp, { IProjects } from "../../src/Admin/Projects";

const AdminProjectsPage: NextPageWithLayout<{ projects: IProjects[] }> = ({
    projects,
}) => {
    return (
        <>
            <Head>
                <title>Shivangam Soni | Admin Panel</title>
            </Head>

            <ProjectsComp projects={projects} />
        </>
    );
};

AdminProjectsPage.getLayout = (page: ReactElement) => {
    return <AdminLayout>{page}</AdminLayout>;
};

export default AdminProjectsPage;

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

    const projects = await Project.find({});

    const projectsProp = projects.map(
        ({ id, name, description, imageUrl, sourceCode, liveDemo, order }) => ({
            id,
            name,
            description,
            imageUrl,
            sourceCode,
            liveDemo,
            order,
        }),
    );

    return {
        props: {
            session: JSON.parse(JSON.stringify(session)),
            projects: projectsProp,
        },
    };
};
