import { auth } from "@/lib/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    return Response.redirect(new URL("/auth/login", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
