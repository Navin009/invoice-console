import { signOut } from "@/actions/auth";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { Button } from "@mantine/core";

export function SignOut() {
	return (
		<form
			action={async () => {
				"use server";
				await signOut({ redirectTo: "/login" });
			}}
		>
			<Button leftSection={<GoogleIcon />} type="submit" variant="default" className="w-full">
				Sign Out
			</Button>
		</form>
	);
}
