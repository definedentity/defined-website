import { db } from "@/appwrite/client";
import React from "react";
import MyProjectsItem from "./MyProjectsItem";

export default async function MyProjectsContainer() {
	const query = (await db.listDocuments("main-db", "projects")).documents;

	query.forEach((project) => {
		console.log(project.name);
	});

	return (
		<div className="w-full h-full">
			<p className="text-white text-center text-3xl py-3">My Projects</p>
			<div className="mt-3 w-11/12 mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{query.map((project) => (
					<MyProjectsItem
						key={project.$id}
						name={project.name}
						description={project.description}
						link={project.link}
						image={project.image}
					/>
				))}
			</div>
		</div>
	);
}