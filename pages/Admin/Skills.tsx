import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

import AdminLayout from "../../src/Layout/AdminLayout";
import SkillsComp, { ISkills } from "../../src/Admin/Skills";
import connectToDB from "../../server/utils/connectToDB";
import Skill from "../../server/models/Skill";

const AdminSkillsPage: NextPageWithLayout<{ skills: ISkills[] }> = (props) => {
    const [skills, setSkills] = useState(() => {
        if (props.skills && props.skills.length > 0) {
            return props.skills;
        }
        return [];
    });

    useEffect(() => {
        if (skills.length === 0) {
            (async () => {
                const response = await fetch("/api/skills");
                const { skills } = await response.json();
                setSkills(skills);
            })();
        }
    }, [skills]);
    return (
        <>
            <Head>
                <title>Shivangam Soni | Admin Panel</title>
            </Head>

            <SkillsComp skills={skills} />
        </>
    );
};

AdminSkillsPage.getLayout = (page: ReactElement) => {
    return <AdminLayout>{page}</AdminLayout>;
};

export default AdminSkillsPage;

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

    const skills = await Skill.find({});

    const skillsProp = skills.map(({ id, name, rating, order }) => ({
        id,
        name,
        rating,
        order,
    }));

    return {
        props: {
            session: JSON.parse(JSON.stringify(session)),
            skills: skillsProp,
        },
    };
};
