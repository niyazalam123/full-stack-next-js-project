import { NextResponse,NextRequest } from "next/server";
import {GetTokenAllData} from "@/helpers/GetTokenData";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){
    try {
        const userId = GetTokenAllData(request);
        const user = await User.findOne({_id:userId}).select("-password");
        return NextResponse.json({message:"user found",result:user},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400})
    }
}