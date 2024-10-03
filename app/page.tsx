import { Suspense } from "react";
import Characters from "./components/Characters";

export default function Home() {
	return (
		<div className="">
			<h1 className="text-5xl font-bold">Next.js</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<h1>Characters</h1>
				<Characters />
			</Suspense>
		</div>
	);
}