import type { NextApiRequest, NextApiResponse } from "next";

import connectToDB from "../../../server/utils/connectToDB";
import Admin from "../../../server/models/Admin";
import { validateEmail, validatePassword } from "../../../utils/formValidation";
import { hashPassword } from "../../../utils/passwordUtils";

/**
 * @param req {NextApiRequest}
 * @param res {NextApiResponse}
 * @returns {JSON}
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    return res.status(401);
    if (req.method !== "POST") {
        return res
            .status(405)
            .json({ success: false, error: "Method not Allowed" });
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

    const { email, password } = req.body;

    const emailError = validateEmail(email);
    if (emailError) {
        return res.status(422).json({ success: false, error: emailError });
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
        return res.status(422).json({ success: false, error: passwordError });
    }

    let hashedPassword = "";
    try {
        hashedPassword = await hashPassword(password);
    } catch (e) {
        // @ts-expect-error
        console.log(e.message);
        return res
            .status(500)
            .json({ success: false, error: "Server Error Try Again" });
    }

    try {
        const newAdminUser = await Admin.create({
            email: email.toLowerCase(),
            password: hashedPassword,
        });
        return res.status(201).json({
            success: true,
            message: "Registered Successfully",
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
