import React from "react";
import styles from "../../orders/invoice.module.css";

const invoiceDetails = {
	invoiceNumber: "INV12345",
	date: "2025-01-03",
	customerName: "John Doe",
	totalAmount: 150.0,
	items: [
		{ id: 1, name: "Item 1", description: "Description of item 1", price: 50.0, quantity: 2 },
		{ id: 2, name: "Item 2", description: "Description of item 2", price: 25.0, quantity: 1 },
		{ id: 3, name: "Item 3", description: "Description of item 3", price: 30.0, quantity: 1 },
	],
};

type Props = {
	params: {
		invoice_no: string;
	};
};

export default function InvoiceDetailsPage({ params }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.invoiceDetails}>
				<h1 className={styles.invoiceTitle}>Invoice #{invoiceDetails.invoiceNumber}</h1>

				<div className={styles.invoiceInfo}>
					<p>
						<strong>Invoice Number:</strong> {invoiceDetails.invoiceNumber}
					</p>
					<p>
						<strong>Date:</strong> {invoiceDetails.date}
					</p>
					<p>
						<strong>Customer:</strong> {invoiceDetails.customerName}
					</p>
					<p>
						<strong>Total Amount:</strong> ${invoiceDetails.totalAmount.toFixed(2)}
					</p>
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
						{invoiceDetails.items.map((item) => (
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
