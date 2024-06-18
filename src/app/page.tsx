"use client";

import { handleEmailPasswordSignIn } from "@/lib/auth";

export default function HomePage() {
	return (
		<main>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleEmailPasswordSignIn({
						email: "dddsdfdfsddsdg@erer.ru",
						password: "3424",
					});
				}}
			>
				<input type="email" name="email" />
				<input type="password" name="password" />
				<button type="submit">Update User Name</button>
			</form>
		</main>
	);
}
