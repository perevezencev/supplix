"use client";

import { handleEmailPasswordSignUp } from "@/lib/auth";

export default function HomePage() {
	return (
		<main>
			<button
				type="button"
				onClick={() => {
					handleEmailPasswordSignUp({
						email: "dddsdfdfdfdsfdfddsdg@erer.ru",
						password: "3424",
					});
				}}
			>
				signup
			</button>
		</main>
	);
}
