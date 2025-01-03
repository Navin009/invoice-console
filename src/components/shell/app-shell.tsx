"use client";
import { NavbarSegmented } from "@/components/navbar-segmented/NavbarSegmented";
import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Session } from "next-auth";

type Props = {
	children: Readonly<React.ReactNode>;
	session: Session | null;
	signOut: JSX.Element;
};

export function BasicAppShell({ children, session, signOut }: Props) {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }} padding="md">
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<div style={{ fontSize: "1.9rem" }}>Invoice Console</div>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<NavbarSegmented signOut={signOut} email={session?.user?.email || ""} />
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
