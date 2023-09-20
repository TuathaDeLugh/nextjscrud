import connection from "@/libs/mongodb"
import Project from "@/models/project"
import { NextResponse } from "next/server"

export async function POST (request){
    const{title,discription} = await request.json();
    await connection();
    await Project.create({title,discription});
    return NextResponse.json({message:"Project created"},{status:201});
}

export async function GET (){
    await connection();
    const projects  = await Project.find();
    return NextResponse.json({projects});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connection();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({message:"Project Deleted"},{status:200});
}