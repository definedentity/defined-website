import Image from "next/image";
import React from "react";

import avatar from "@/assets/avatar.png";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="">
				<p className="text-7xl text-center">Defined Entity</p>
				<p className="my-3 text-center text-[#ff79c6] text-xl">
					{"<Web developer & Minecraft mod developer>"}
				</p>
				<Image
					src={avatar}
					alt="avatar"
					className="rounded-full w-56 h-56 mx-auto"
				/>
				<div className="flex gap-12 mt-3 justify-center items-center">
					<Link href={"https://github.com/definedentity"} target="_blank" className="hover:scale-125 duration-300">
						<FaGithub className="w-8 h-8" />
					</Link>
					<Link href={"https://discord.com/users/1122487934680060016"} target="_blank" className="hover:scale-125 duration-300">
						<FaDiscord className="w-8 h-8" />
					</Link>
				</div>
			</div>
		</div>
	);
}
