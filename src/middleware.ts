import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/auth(.*)",
  "/portal(.*)",
  "/images(.*)",
]);
const isIgnoredRoutes = createRouteMatcher(["/chatbot"]);

export default clerkMiddleware((auth, request) => {
  // if (!isPublicRoute(request) || !isIgnoredRoutes(request)) {
  //   auth().protect();
  // }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
