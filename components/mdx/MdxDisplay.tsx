"use client";
import React from "react";

import { useState, useEffect, Fragment } from "react";
// mdx
import "katex/dist/katex.min.css";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
type Props = {
	mdxString: string;
};

const MdxDisplay = ({ mdxString }: Props) => {
	// mdx
	const [mdxModule, setMdxModule] = useState<any>();
	const Content = mdxModule ? mdxModule.default : Fragment;
	useEffect(
		function () {
			(async function () {
				const code = String(
					await compile(`${mdxString.replaceAll("\n", "<br/>")}`, {
						outputFormat: "function-body",
						rehypePlugins: [rehypeKatex],
						remarkPlugins: [remarkMath, remarkGfm],
					}),
				);
				setMdxModule(
					await run(code, { ...runtime, baseUrl: import.meta.url, Fragment }),
				);
			})();
		},
		[mdxString],
	);
	return <Content />;
};

export default MdxDisplay;
