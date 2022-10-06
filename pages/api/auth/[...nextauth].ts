// @ts-nocheck
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Admin from "../../../server/models/Admin";

import connectToDB from "../../../server/utils/connectToDB";
import { validateEmail } from "../../../utils/formValidation";
import { verifyPassword } from "../../../utils/passwordUtils";

export default NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 60 * 5, // 5 Minutes
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials, req) {
                try {
                    await connectToDB();
                } catch (e) {
                    throw new Error("Server Error!");
                }

                const email = credentials?.email.toLowerCase();

                if (!email || !email?.trim() || validateEmail(email)) {
                    throw new Error("Invalid Email");
                }

                let adminUser = null;
                try {
                    adminUser = await Admin.findOne({ email: email });
                } catch (e) {
                    throw new Error("Server Error!");
                }

                if (adminUser === null) {
                    console.log(adminUser, !adminUser);
                    throw new Error("Invalid Data!");
                }

                const password = credentials?.password;

                if (!password) {
                    throw new Error("Invalid Data!");
                }

                const passwordVerified = await verifyPassword(
                    password,
                    adminUser.password,
                );

                if (!passwordVerified) {
                    throw new Error("Invalid Data!");
                }

                return { email: adminUser.email };
            },
        }),
    ],
});
