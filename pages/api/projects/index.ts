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
    if (req.method !== "POST") {
        return res
            .status(405)
            .json({ success: false, error: "Method not Allowed" });
    }

    const { name, description, imageUrl, sourceCode, liveDemo } = req.body;

    if (
        name.trim() === "" ||
        description.trim() === "" ||
        imageUrl.trim() === "" ||
        sourceCode.trim() === ""
    ) {
        return res.status(422).json({
            success: false,
            error: "Enter Appropriate Data. Apart from Live Demo All other Fields are Required",
        });
    }

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
        const newSkill = await Project.create({
            name,
            description,
            imageUrl,
            sourceCode,
            liveDemo,
        });
        return res.status(201).json({
            success: true,
            message: "Added Successfully",
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
