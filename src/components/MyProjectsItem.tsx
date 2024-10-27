import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

export interface MyProjectsItemProps {
	name: string;
	description: string;
	link: string;
	image: string;
}

export default function MyProjectsItem({
	name,
	description,
	link,
	image,
}: MyProjectsItemProps) {
	return (
		<Card className="w-full bg-black">
			<CardHeader>
				<CardTitle className="text-primary-foreground">
					<Avatar className="w-12 h-12">
						<AvatarImage src={image} />
						<AvatarFallback>{name}</AvatarFallback>
					</Avatar>
					{name}
				</CardTitle>
				<CardDescription className="text-slate-300">{description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button asChild>
					<Link href={link} target="_blank">
						<i className="i-fa6-brands-github" />
						GitHub
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
