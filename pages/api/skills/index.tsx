// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import connectToDB from "../../../server/utils/connectToDB";
import Skill from "../../../server/models/Skill";

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

    const { name, rating } = req.body;

    if (
        name.trim() === "" ||
        rating.toString().trim() === "" ||
        rating < 1 ||
        rating > 10
    ) {
        return res.status(422).json({
            success: false,
            error: "Enter Appropriate Data. Name & Rating can't be Empty. Rating should be between 1 & 10.",
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
        const newSkill = await Skill.create({ name, rating });
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