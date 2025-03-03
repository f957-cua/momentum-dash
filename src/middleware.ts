import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  console.log("lol!!!");
  // Access the query string parameters
  const queryParams = request.nextUrl.searchParams;
  queryParams.forEach((value, key) => {
    if (key === "sbpmId") {
      response.cookies.set("sbpmId", value);
    }
    console.log(`Query parameter: ${key} = ${value}`);
  });

  return response;
}

export const config = {
  matcher: "/",
};
