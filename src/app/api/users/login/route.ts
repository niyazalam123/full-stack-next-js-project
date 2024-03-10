import {connect} from "@/dbConfig/dbConfig";
import { NextResponse,NextRequest } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        
    } catch (error:any) {
        return NextResponse.json({error:error.message,success:false},{status:500})
    }
}