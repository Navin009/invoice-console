import SignIn from "@/components/login/sign-in";
import React from "react";

export default function page() {
	return (
		<div className="flex justify-center items-center h-screen">
			<section className="w-full max-w-md p-6 bg-white rounded-lg shadow-md ">
				<h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h1>
				<SignIn />
			</section>
		</div>
	);
}
