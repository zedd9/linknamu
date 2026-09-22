import { NextResponse } from "next/server";
import { getClickCounts } from "@/lib/linkClicks";

export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json(counts);
}
