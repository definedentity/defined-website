import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import avatar from "@/assets/img/avatar.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cardContents: Array<{ icon: React.ReactNode; text: string }> = [
	{
		icon: <i className="i-fa6-solid-comment-dots" />,
		text: "He/Him",
	},
	{
		icon: <i className="i-fa6-solid-mars" />,
		text: "Male",
	},
	{
		icon: <i className="i-fa6-solid-venus-mars" />,
		text: "Hetero",
	},
	{
		icon: <i className="i-fa6-solid-cake-candles" />,
		text: (new Date().getFullYear() - 2007).toString(),
	},
	{
		icon: <i className="i-fa6-solid-earth-asia" />,
		text: "Vietnam",
	},
	{
		icon: <i className="i-fa6-solid-language" />,
		text: "VI + EN",
	},
];

export default function Header() {
	return (
		<div className="w-full h-screen grid place-items-center">
			<Card className="border border-white bg-black w-11/12 sm:w-4/5 md:w-8/12 lg:w-1/2 xl:w-2/5">
				<CardHeader>
					<CardTitle className="text-white text-center text-4xl">
						Hi, {"I'm"} DefinedEntity
					</CardTitle>
					<CardDescription className="mx-auto pt-6">
						<Avatar className="w-36 h-36">
							<AvatarImage src={avatar.src} className="object-cover" />
							<AvatarFallback>DE</AvatarFallback>
						</Avatar>
					</CardDescription>
				</CardHeader>
				<CardContent className="flex gap-2 justify-center items-center flex-wrap">
					{cardContents.map(({ icon, text }, index) => (
						<Badge key={index} className="flex gap-1 cursor-pointer">
							{icon}
							{text}
						</Badge>
					))}
				</CardContent>
				<CardFooter className="flex gap-2 justify-center items-center flex-wrap">
					<Link href="https://github.com/definedentity" target="_blank">
						<Button variant="outline">
							<i className="i-fa6-brands-github"></i>GitHub
						</Button>
					</Link>
					<Link href="https://www.youtube.com/@DrDefined">
						<Button variant="outline">
							<i className="i-fa6-brands-youtube"></i>YouTube
						</Button>
					</Link>
					<Link href="mailto:hello@definedentity.dev" target="_blank">
						<Button variant="outline">
							<i className="i-fa6-solid-envelope"></i>Email
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
