"use client";
import { NavbarSegmented } from "@/components/navbar-segmented/NavbarSegmented";
import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type Props = {
	children: React.ReactNode;
	session: any;
	signOut: any;
};

export function BasicAppShell({ children, session, signOut }: Props) {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }} padding="md">
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<div style={{ fontFamily: "Inter", fontSize: "1.5rem", fontWeight: "bold" }}>STORE 369</div>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<NavbarSegmented signOut={signOut} email={session?.user?.email || ""} />
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
