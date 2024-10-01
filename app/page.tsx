import { Suspense } from "react";
import FetchTest from "./components/FetchTest";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-5xl font-bold">Next.js</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<h1>Characters</h1>
				<FetchTest />
			</Suspense>
		</div>
	);
}