import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="py-6">
			<p className="text-white text-center text-lg">
				Site developed with <i className="i-fa6-solid-heart text-red-600"></i>{" "}
				by <Link href="https://github.com/definedentity" target="_blank" className="text-primary">DefinedEntity</Link>
			</p>
		</footer>
	);
}
