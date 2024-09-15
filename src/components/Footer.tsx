import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<div className="w-full my-6">
			<p className="text-center">
				Site developed by{" "}
				<Link href="" target="_blank" className="hover:underline text-[#ff79c6]">
					DefinedEntity
				</Link>
			</p>
		</div>
	);
}
