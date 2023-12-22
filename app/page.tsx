"use client";
import Image from "next/image";
import MdxDisplay from "@/components/mdx/MdxDisplay";
import { useState } from "react";
export default function Home() {
	const [string, setString] = useState<string>("");
	return (
		<div className=" w-dvw h-dvh bg-gray-200 flex flex-col justify-center items-center gap-4">
			<input
				className="w-1/2 p-1 rounded border shadow-inner bg-white"
				onChange={(e) => setString(e.target.value)}
				type="text"
				name=""
				id=""
			/>
			<div className="p-1 border rounded bg-white w-1/2 aspect-video">
				<MdxDisplay mdxString={string.replaceAll("\\\\", "\\")} />
			</div>
		</div>
	);
}
