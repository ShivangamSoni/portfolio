// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import connectToDB from "../../../server/utils/connectToDB";
import Skill from "../../../server/models/Skill";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

/**
 * @param req {NextApiRequest}
 * @param res {NextApiResponse}
 * @returns {JSON}
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    // @ts-expect-error
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(401);
    }

    if (req.method !== "PUT") {
        return res
            .status(405)
            .json({ success: false, error: "Method not Allowed" });
    }

    const { skills } = req.body;

    if (skills.length < 1) {
        return res.status(422).json({
            success: false,
            error: "Invalid Data!",
        });
    }

    // @ts-expect-error
    const updateOps = skills.map(({ id, name, rating, order }) => {
        return {
            updateOne: {
                filter: { _id: id },
                update: { name, rating, order },
                upsert: false,
            },
        };
    });

    try {
        await connectToDB();
        console.log("Connected to DB");
    } catch (e) {
        // @ts-expect-error
        console.log(e.message);
        return res.status(500).json({
            success: false,
            error: "Server Error Try Again",
        });
    }

    try {
        await Skill.bulkWrite(updateOps, { ordered: false });
        return res.status(201).json({
            success: true,
            message: "Updated Successfully",
        });
    } catch (e) {
        // @ts-expect-error
        console.log(e.message);
        return res.status(500).json({
            success: false,
            error: "Server Error Try Again",
        });
    }
}
