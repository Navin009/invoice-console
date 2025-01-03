import React from "react";
import styles from "./invoice.module.css";
import { Autocomplete, Button, Input, NumberInput, Space } from "@mantine/core";

const invoice = {
	invoiceNumber: "",
	date: "2025-01-03",
	customerName: "John Doe",
	totalAmount: 150.0,
};

const items = [
	{ id: 1, name: "Item 1", description: "Description of item 1", price: 50.0, quantity: 2 },
	{ id: 2, name: "Item 2", description: "Description of item 2", price: 25.0, quantity: 1 },
	{ id: 3, name: "Item 3", description: "Description of item 3", price: 30.0, quantity: 1 },
];

function page() {
	return (
		<div className={styles.container}>
			<div className={styles.invoiceDetails}>
				<h1 className={styles.invoiceTitle}>Invoice Details</h1>

				<div className={styles.invoiceInfo}>
					<p>
						<strong>Invoice Number:</strong> {invoice.invoiceNumber}
					</p>
					<p>
						<strong>Date:</strong> {invoice.date}
					</p>
					<p>
						<strong>Customer:</strong> {invoice.customerName}
					</p>
					<p>
						<strong>Total Amount:</strong> ${invoice.totalAmount.toFixed(2)}
					</p>
				</div>

				<div className="flex justify-between items-end">
					<div className="flex justify-start gap-4 items-end">
						<Autocomplete type="number" label="Product No" data={["Customer 1", "Customer 2", "Customer 3"]} />
						<Autocomplete label="Product Name" data={["Product 1", "Product 2", "Product 3"]} />
						<NumberInput label="Quantity" placeholder="Input placeholder" />
						<Button>Add Product</Button>
					</div>
					<div className="flex justify-end gap-4 items-end">
						<Button color="green">Generate Bill</Button>
						<Button color="cyan">Download PDF</Button>
					</div>
				</div>
			</div>

			<div className={styles.itemsSection}>
				<h2 className={styles.itemsTitle}>Items</h2>
				<table className={styles.itemsTable}>
					<thead>
						<tr>
							<th>Item</th>
							<th>Description</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item) => (
							<tr key={item.id}>
								<td>{item.name}</td>
								<td>{item.description}</td>
								<td>${item.price.toFixed(2)}</td>
								<td>{item.quantity}</td>
								<td>${(item.price * item.quantity).toFixed(2)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default page;
