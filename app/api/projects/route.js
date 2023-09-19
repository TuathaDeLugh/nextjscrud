import connection from "@/libs/mongodb"
import Project from "@/models/project"
import { NextResponse } from "next/server"

export async function POST (request){
    const{title,discription} = await request.json();
    await connection();
    await Project.create({title,discription});
    return NextResponse.json({message:"Project created"},{status:201});
}