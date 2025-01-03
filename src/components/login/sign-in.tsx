import { signIn } from "@/actions/auth";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { Button } from "@mantine/core";

export default function SignIn() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google", { redirectTo: "/dashboard" });
			}}
			className="flex flex-col gap-4"
		>
			<Button leftSection={<GoogleIcon />} type="submit" variant="default">
				Signin with Google
			</Button>
		</form>
	);
}
