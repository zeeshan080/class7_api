import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  const data = await response.json();
  return NextResponse.json({ data });
}
export async function POST(request: NextRequest) {
  const req = await request.json();

  if (req) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: req.title,
        id: req.id,
        completed: req.completed,
        userId: req.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return NextResponse.json({ data });
  } else {
    return NextResponse.json({
      data: "Invalid Request parameters passed are less than required",
    });
  }
}
export async function PATCH(request: NextRequest) {
  const req = await request.json();
  if (req) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PATCH",
        body: JSON.stringify({
          title: req.title,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    return NextResponse.json({ data });
  } else {
    return NextResponse.json({
      data: "Invalid Request parameters passed are less than required",
    });
  }
}
export async function PUT(request: NextRequest) {
  const req = await request.json();
  if (req) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        body: JSON.stringify({
          title: req.title,
          id: req.id,
          completed: req.completed,
          userId: req.userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = await response.json();
    return NextResponse.json({ data });
  } else {
    return NextResponse.json({
      data: "Invalid Request parameters passed are less than required",
    });
  }
}
