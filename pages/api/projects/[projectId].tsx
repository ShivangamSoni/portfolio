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
    const { projectId } = req.query;
    if (req.method === "PUT") {
        const { name, description, imageUrl, liveDemo, sourceCode } = req.body;

        if (
            name.trim() === "" ||
            description.trim() === "" ||
            imageUrl.trim() === "" ||
            sourceCode.trim() === "" ||
            (!liveDemo && liveDemo.trim() === "")
        ) {
            return res.status(422).json({
                success: false,
                error: "Enter Appropriate Data. Name, Description, Image URL, Live Demo Link & Source Code Link can't be Empty. Rating should be between 1 & 10.",
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
            const newSkill = await Project.updateOne(
                { _id: projectId },
                { name, description, imageUrl, liveDemo, sourceCode },
            );
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
    } else if (req.method === "DELETE") {
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
            await Project.deleteOne({ _id: projectId });
            return res.status(201).json({
                success: true,
                message: "Deleted Successfully",
            });
        } catch (e) {
            // @ts-expect-error
            console.log(e.message);
            return res.status(500).json({
                success: false,
                error: "Server Error Try Again",
            });
        }
    } else {
        return res
            .status(405)
            .json({ success: false, error: "Method not Allowed" });
    }
}
