import { auth } from "@/lib/auth";

// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/auth/login") {
//     return Response.redirect(new URL("/auth/login", req.nextUrl.origin));
//   }
// });

// export const config = {
//   matcher: ["/dashboard/:path*", "/profile/:path*"],
// };

// middleware.js


export default auth((req) => {
  const { pathname } = req.nextUrl;
  
  // Allow these paths without auth
  const publicPaths = ["/auth/login", "/", "/about"]; // Add your public paths
  
  if (!req.auth && !publicPaths.includes(pathname)) {
    return Response.redirect(new URL("/auth/login", req.nextUrl.origin));
  }
  
  // Prevent authenticated users from accessing login
  if (req.auth && pathname === "/auth/login") {
    return Response.redirect(new URL("/", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};