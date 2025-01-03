"use client";
import { SegmentedControl, Text } from "@mantine/core";
import {
	Icon2fa,
	IconBellRinging,
	IconDatabaseImport,
	IconFileAnalytics,
	IconFingerprint,
	IconKey,
	IconLicense,
	IconMessage2,
	IconMessages,
	IconReceipt2,
	IconReceiptRefund,
	IconSettings,
	IconShoppingCart,
	IconUsers,
} from "@tabler/icons-react";
import { useState } from "react";
import classes from "./NavbarSegmented.module.css";
import Link from "next/link";

const tabs = {
	account: [
		{ link: "", label: "Notifications", icon: IconBellRinging },
		{ link: "", label: "Billing", icon: IconReceipt2 },
		{ link: "", label: "Security", icon: IconFingerprint },
		{ link: "", label: "SSH Keys", icon: IconKey },
		{ link: "", label: "Databases", icon: IconDatabaseImport },
		{ link: "", label: "Authentication", icon: Icon2fa },
		{ link: "", label: "Other Settings", icon: IconSettings },
	],
	general: [
		{ link: "/dashboard/orders", label: "Orders", icon: IconShoppingCart },
		{ link: "/dashboard/receipts", label: "Receipts", icon: IconLicense },
		{ link: "/dashboard/reviews", label: "Reviews", icon: IconMessage2 },
		{ link: "/dashboard/messages", label: "Messages", icon: IconMessages },
		{ link: "/dashboard/customers", label: "Customers", icon: IconUsers },
		{ link: "/dashboard/refunds", label: "Refunds", icon: IconReceiptRefund },
		{ link: "/dashboard/files", label: "Files", icon: IconFileAnalytics },
	],
};

type props = {
	email: string;
	signOut: JSX.Element;
};

export function NavbarSegmented({ email, signOut }: props) {
	const [section, setSection] = useState<"account" | "general">("general");
	const [active, setActive] = useState("Billing");

	const links = tabs[section].map((item) => (
		<Link
			className={classes.link}
			data-active={item.label === active || undefined}
			href={item.link}
			key={item.label}
			onClick={() => {
				// event.preventDefault();
				setActive(item.label);
			}}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</Link>
	));

	return (
		<nav className={classes.navbar}>
			<div>
				<Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
					{email}
				</Text>

				<SegmentedControl
					value={section}
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					onChange={(value: any) => setSection(value)}
					transitionTimingFunction="ease"
					fullWidth
					data={[
						{ label: "System", value: "general" },
						{ label: "Account", value: "account" },
					]}
				/>
			</div>

			<div className={classes.navbarMain}>{links}</div>

			<div className={classes.footer}>{signOut}</div>
		</nav>
	);
}
