import message from "@/models/chat";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    await message.create(body);
    return NextResponse.json({ message: "goode", status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function GET() {
  try {
    const messages = await message.find();
    return NextResponse.json(messages);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
