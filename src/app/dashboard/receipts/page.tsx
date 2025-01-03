import ReceiptTable from "@/components/table/receipt-table";
import React from "react";

function page() {
	return (
		<div>
			<h1 className="text-xl pb-10">Receipts</h1>
			<ReceiptTable />
		</div>
	);
}

export default page;
