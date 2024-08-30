import { NextResponse, NextRequest } from "next/server";
import Student from "../../../(models)/Student";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const students = await Student.findByIdAndDelete(id);

    return NextResponse.json({ students }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT() {}

export async function POST() {}
export async function GET() {}
