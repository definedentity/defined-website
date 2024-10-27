import { db } from "@/appwrite/appwrite"
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

export interface MyProjectsItemProps {
	name: string
	description: string
	link: string
	image: string
}

export function ProjectItem({
	name,
	description,
	link,
	image,
}: MyProjectsItemProps) {
	return (
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
	)
}

export async function ProjectContainer() {
	const query = (await db.listDocuments("main-db", "projects")).documents

	return (
		<div className='w-full h-full'>
			<p className='text-white text-center text-3xl py-6'>My Projects</p>
			<div className='w-11/12 mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{query.map(project => (
					<ProjectItem
						key={project.$id}
						name={project.name}
						description={project.description}
						link={project.link}
						image={project.image}
					/>
				))}
			</div>
		</div>
	)
}
