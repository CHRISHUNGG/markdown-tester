"use client";
import Image from "next/image";
import MdxDisplay from "@/components/mdx/MdxDisplay";
import { useState } from "react";
export default function Home() {
	const [string, setString] = useState<string>("");
	return (
		<div className=" w-dvw h-dvh bg-gray-200 flex flex-col justify-center items-center gap-4 ">
			<h1 className="font-bold text-3xl drop-shadow-md bg-gradient-to-br from-[#824FFB] to-[#3B60EC] bg-clip-text text-transparent">
				MARKDOWN TESTER
			</h1>
			<div className="flex w-1/2 justify-center gap-3 items-center">
				<input
					value={string}
					className="flex-1 p-1 rounded border shadow-inner gap-3 bg-white"
					onChange={(e) => setString(e.target.value)}
					type="text"
					name=""
					id=""
				/>
				<button
					className="py-1 px-3 rounded bg-black text-white font-medium"
					onClick={() => setString("")}>
					clear
				</button>
			</div>

			<div className="p-1 border rounded bg-white w-1/2 aspect-video">
				<MdxDisplay mdxString={string.replaceAll("\\\\", "\\")} />
			</div>
		</div>
	);
}
