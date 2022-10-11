// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import connectToDB from "../../../server/utils/connectToDB";
import Project from "../../../server/models/Project";

/**
 * @param req {NextApiRequest}
 * @param res {NextApiResponse}
 * @returns {JSON}
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== "PUT") {
        return res
            .status(405)
            .json({ success: false, error: "Method not Allowed" });
    }

    const { projects } = req.body;

    if (projects.length < 1) {
        return res.status(422).json({
            success: false,
            error: "Invalid Data!",
        });
    }

    const updateOps = projects.map(
        // @ts-expect-error
        ({ id, name, description, imageUrl, liveDemo, sourceCode, order }) => {
            return {
                updateOne: {
                    filter: { _id: id },
                    update: {
                        name,
                        description,
                        imageUrl,
                        liveDemo,
                        sourceCode,
                        order,
                    },
                    upsert: false,
                },
            };
        },
    );

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
        await Project.bulkWrite(updateOps, { ordered: false });
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
