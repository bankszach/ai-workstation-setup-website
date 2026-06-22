import { NextResponse } from "next/server";

export function jsonResponse<T>(body: T, init?: ResponseInit) {
  return NextResponse.json(body, {
    headers: {
      "cache-control": "public, max-age=60, stale-while-revalidate=3600",
      ...init?.headers,
    },
    status: init?.status,
  });
}
