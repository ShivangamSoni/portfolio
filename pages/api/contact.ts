// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import connectToDB from "../../server/utils/connectToDB";
import Contact from "../../server/models/Contact";
import {
    validateEmail,
    validateMessage,
    validateName,
    validateSubject,
} from "../../utils/formValidation";
import { authOptions } from "./auth/[...nextauth]";

/**
 * @param req {NextApiRequest}
 * @param res {NextApiResponse}
 * @returns {JSON}
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
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

        const { name, email, subject, message } = req.body;

        const nameError = validateName(name);
        if (nameError) {
            return res.status(422).json({ success: false, error: nameError });
        }

        const emailError = validateEmail(email);
        if (emailError) {
            return res.status(422).json({ success: false, error: emailError });
        }

        const subjectError = validateSubject(subject);
        if (subjectError) {
            return res
                .status(422)
                .json({ success: false, error: subjectError });
        }

        const messageError = validateMessage(message);
        if (messageError) {
            return res
                .status(422)
                .json({ success: false, error: messageError });
        }

        try {
            const newContact = await Contact.create({
                name,
                email,
                subject,
                message,
            });
            return res.status(201).json({
                success: true,
                message: "Submitted Successfully! I'll Reach Out Soon.",
            });
        } catch (e) {
            // @ts-expect-error
            console.log(e.message);
            return res.status(500).json({
                success: false,
                error: "Server Error Try Again",
            });
        }
    } else if (req.method === "GET") {
        // @ts-expect-error
        const session = await unstable_getServerSession(req, res, authOptions);
        if (!session) {
            return res.status(401);
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
            const contacts = await Contact.find({});
            return res.status(201).json({
                success: true,
                contacts,
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
