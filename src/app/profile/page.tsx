import { auth } from "@/actions/auth";
import { ServerError } from "@/components/error/ServerError";
import { Avatar } from "@mantine/core";

async function page() {
	const session = await auth();

	if (!session) return <ServerError />;

	return (
		<div>
			<Avatar src={session.user?.image} alt={session.user?.name || ""} />
		</div>
	);
}

export default page;
