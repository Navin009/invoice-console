import { auth } from "@/actions/auth";

export default auth((req) => {
	// if (!req.auth && req.nextUrl.pathname !== "/login") {
	// 	const newUrl = new URL("/login", req.nextUrl.origin);
	// 	return Response.redirect(newUrl);
	// }
});

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export const dynamic = "force-dynamic";