import { connectToDB } from "@lib/mongodb";
import Education from "@models/Education";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const formData = await req.formData();
        const institution = formData.get('institution');
        const major = formData.get('major');
        const gpa = formData.get('gpa');
        const description = formData.get('description');
        const timeline = formData.get('timeline');
        await connectToDB();
        await Education.create({institution,major,gpa,description,timeline});
        return NextResponse.json({message:"Education\\ Created"});
    }
    catch(error){
        return NextResponse.json(error);
    }
}