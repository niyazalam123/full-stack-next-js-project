import { connect } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userName, password } = reqBody;

        // check user exist or not 
        const user: any = await User.findOne({ userName });
        if (!user) {
            return NextResponse.json({ error: "User does not exists", success: false }, { status: 400 });
        }

        // password check
        const validPassword = await bcryptjs.compare(password,user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "inValid Password", success: false }, { status: 400 });
        }

        // create token data
        const tokenData = {
            id: user._id,
            userName: user.userName,
            email: user.email
        };

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "2d" })

        const response = NextResponse.json(
            {
                message: "successfully login",
                success: true
            },
            {
                status: 200
            }
        );

        // set token to cokkies
        response.cookies.set("token", token, { httpOnly: true })

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message, success: false }, { status: 500 })
    }
}