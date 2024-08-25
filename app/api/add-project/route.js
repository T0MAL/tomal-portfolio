import { connectToDB } from "@lib/mongodb";
import Project from "@models/Project";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the form data from the request
    const formData = await req.formData();
    const title = formData.get('title');
    const technologies = formData.getAll('technologies'); // Using getAll to handle array input
    const description = formData.get('description');
    const imageLink = formData.get('imageLink') || '';
    const githubLink = formData.get('githubLink') || '';
    const deployedLink = formData.get('deployedLink') || '';

    // Connect to the database
    await connectToDB();

    // Create a new project entry in the database
    await Project.create({
      title,
      technologies,
      description,
      imageLink,
      githubLink,
      deployedLink,
    });

    // Return a success response
    return NextResponse.json({ message: "Project created successfully!" });
  } catch (error) {
    // Return an error response
    return NextResponse.json({ error: error.message });
  }
}
