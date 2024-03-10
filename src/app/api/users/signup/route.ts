import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from "bcryptjs"

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {userName,email,password} = reqBody;

        // check user already exists
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error:"user alraedy exists"},{status:400})
        }

        // hash password 
        const salt = await bcryptjs.genSalt(10);
        const hassedPassword = await bcryptjs.hash(password,salt);

        // user save to database
        const newUser = new User({
            userName,
            email,
            password:hassedPassword
        })

        const saveUser = await newUser.save();

        return NextResponse.json(
            {
                message:"user created successfully",
                success:true,
                result:saveUser
            },
            {status:200}
        );

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}