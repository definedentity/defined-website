import { db } from "@/appwrite/appwrite"
import { ProjectItem } from "./project-item"

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
