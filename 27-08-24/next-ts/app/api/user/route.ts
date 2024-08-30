import { NextResponse } from "next/server";
import Student from "../../(models)/Student";

export async function GET() {
  try {
    const students = await Student.find();

    return NextResponse.json({ students }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
