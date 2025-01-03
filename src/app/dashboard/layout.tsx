import { auth } from "@/actions/auth";
import { ServerError } from "@/components/error/ServerError";
import { SignOut } from "@/components/login/sign-out";
import { BasicAppShell } from "@/components/shell/app-shell";
import React from "react";

async function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();

	//TODO change to !session after development
	if (session) return <ServerError />;

	return (
		<BasicAppShell signOut={<SignOut />} session={session}>
			{children}
		</BasicAppShell>
	);
}

export default layout;
