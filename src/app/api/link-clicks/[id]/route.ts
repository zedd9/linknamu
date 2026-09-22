import { NextResponse } from "next/server";
import { incrementClick } from "@/lib/linkClicks";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const count = await incrementClick(id);
  return NextResponse.json({ count });
}
