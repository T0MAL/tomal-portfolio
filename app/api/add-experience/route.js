import { connectToDB } from "@lib/mongodb";
import Experience from "@models/Experience";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const company = formData.get('company');
        const role = formData.get('role');
        const timeline = formData.get('timeline');
        const location = formData.get('location');
        const details = formData.getAll('details'); // Use getAll to fetch multiple values for the array

        // Connect to the database
        await connectToDB();

        // Create the experience entry
        await Experience.create({ company, role, timeline, location, details });

        return NextResponse.json({ message: "Experience Created" });
    } catch (error) {
        console.error("Error creating experience:", error);
        return NextResponse.json({ error: "Failed to create experience" }, { status: 500 });
    }
}
