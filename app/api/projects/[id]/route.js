import connection from "@/libs/mongodb"
import Project from "@/models/project"
import { NextResponse } from "next/server"

export async function PUT(request,{params}){
    const { id } = params;
    const { newt: title, newd : discription,} = await request.json();
    await connection();
    await Project.findByIdAndUpdate(id, { title,discription });
    return NextResponse.json({message:"Project updated"},{status:200});
} 
  export async function GET(request, { params }) {
    const { id } = params;
    await connection();
    const project = await Project.findOne({ _id: id });
    return NextResponse.json({ project }, { status: 200 });
}