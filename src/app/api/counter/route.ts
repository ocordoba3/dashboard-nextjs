import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    counter: 200,
    message: "All good",
  });
}
