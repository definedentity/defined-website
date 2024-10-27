"use client"

import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

export interface MyProjectsItemProps {
	name: string
	description: string
	link: string
	image: string
}

export default function MyProjectsItem({
	name,
	description,
	link,
	image,
}: MyProjectsItemProps) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	})
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

	return (
		<motion.div ref={ref} style={{ scale }}>
			{" "}
			<Card className='w-full bg-black'>
				<CardHeader>
					<CardTitle className='text-primary-foreground'>
						<Avatar className='w-12 h-12'>
							<AvatarImage src={image} />
							<AvatarFallback>{name}</AvatarFallback>
						</Avatar>
						{name}
					</CardTitle>
					<CardDescription className='text-slate-300'>
						{description}
					</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button asChild>
						<Link href={link} target='_blank'>
							<i className='i-fa6-brands-github' />
							GitHub
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	)
}
