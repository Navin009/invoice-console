"use client";
import { Button, Table } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

export default function ReceiptTable() {
	const router = useRouter();

	const viewInvoice = (id: number) => {
		router.push(`/dashboard/receipts/${id}`);
	};

	return (
		<div>
			<Table>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Receipt ID</Table.Th>
						<Table.Th>Mobile No</Table.Th>
						<Table.Th>Created At</Table.Th>
						<Table.Th>Updated At</Table.Th>
						<Table.Th>Unpaid Amount</Table.Th>
						<Table.Th>Bill Amount</Table.Th>
						<Table.Th>Total Amount</Table.Th>
						<Table.Th>Actions</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody style={{ fontFamily: "Arial" }}>
					<Table.Tr>
						<Table.Td>1</Table.Td>
						<Table.Td>1234567890</Table.Td>
						<Table.Td>2021-05-01</Table.Td>
						<Table.Td>2021-05-01</Table.Td>
						<Table.Td>100</Table.Td>
						<Table.Td>100</Table.Td>
						<Table.Td>100</Table.Td>
						<Table.Td className="flex gap-2">
							<Button onClick={() => viewInvoice(1)}>View</Button>
							<Button>Update</Button>
						</Table.Td>
					</Table.Tr>
					<Table.Tr>
						<Table.Td>2</Table.Td>
						<Table.Td>1234567890</Table.Td>
						<Table.Td>2021-05-01</Table.Td>
						<Table.Td>2021-05-01</Table.Td>
						<Table.Td>100</Table.Td>
						<Table.Td>100</Table.Td>
						<Table.Td>100</Table.Td>
						<Table.Td className="flex gap-2">
							<Button>View</Button>
							<Button>Update</Button>
						</Table.Td>
					</Table.Tr>
				</Table.Tbody>
			</Table>
		</div>
	);
}
