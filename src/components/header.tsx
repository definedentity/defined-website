import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import React from "react"

import avatar from "@/assets/img/avatar.png"

const cardContents: Array<{ icon: React.ReactNode; text: string }> = [
	{
		icon: <i className='i-fa6-solid-comment-dots' />,
		text: "He/Him",
	},
	{
		icon: <i className='i-fa6-solid-mars' />,
		text: "Male",
	},
	{
		icon: <i className='i-fa6-solid-venus-mars' />,
		text: "Hetero",
	},
	{
		icon: <i className='i-fa6-solid-cake-candles' />,
		text: (new Date().getFullYear() - 2007).toString(),
	},
	{
		icon: <i className='i-fa6-solid-earth-asia' />,
		text: "Vietnam",
	},
	{
		icon: <i className='i-fa6-solid-language' />,
		text: "VI + EN",
	},
]

export function Header() {
	return (
		<header className='w-full h-screen grid place-items-center'>
			<Card className='border border-white bg-black w-11/12 sm:w-4/5 md:w-8/12 lg:w-1/2 xl:w-2/5'>
				<CardHeader>
					<CardTitle className='text-white'>
						<p className='text-4xl text-center'>Hi, {"I'm"} DefinedEntity</p>
						<p className='text-xl text-primary text-center'>
							{"<Web developer & Minecraft mod developer>"}
						</p>
					</CardTitle>
					<CardDescription className='mx-auto'>
						<Avatar className='w-36 h-36'>
							<AvatarImage src={avatar.src} alt="avatar" className='object-cover' />
							<AvatarFallback>DE</AvatarFallback>
						</Avatar>
					</CardDescription>
				</CardHeader>
				<CardContent className='flex gap-2 justify-center items-center flex-wrap'>
					{cardContents.map(({ icon, text }, index) => (
						<Badge key={index} className='flex gap-1 cursor-pointer'>
							{icon}
							{text}
						</Badge>
					))}
				</CardContent>
				<CardFooter className='flex gap-2 justify-center items-center flex-wrap'>
					<Button variant='outline' asChild>
						<Link href='https://github.com/definedentity' target='_blank'>
							<i className='i-fa6-brands-github'></i>GitHub
						</Link>
					</Button>
					<Button variant='outline' asChild>
						<Link href='https://www.youtube.com/@DrDefined'>
							<i className='i-fa6-brands-youtube text-red-600'></i>
							YouTube
						</Link>
					</Button>
					<Button variant='outline' asChild>
						<Link href='mailto:hello@definedentity.dev' target='_blank'>
							<i className='i-fa6-solid-envelope'></i>Email
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</header>
	)
}
