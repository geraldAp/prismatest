import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        description: body.description,
        tagId: body.tag,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not create posts " },
      { status: 200 }
    );
  }
}
