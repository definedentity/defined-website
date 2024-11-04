export const dynamic = "force-dynamic";

import { db } from "~/appwrite/appwrite";
import { ProjectItem, type ProjectItemProps } from "./ProjectItem";
import { type Models } from "appwrite";

type ProjectType = Models.Document & ProjectItemProps;

export async function ProjectContainer() {
  const data = (await db.listDocuments("main-db", "projects"))
    .documents as ProjectType[];

  return (
    <section className="h-full w-full">
      <p className="py-6 text-center text-3xl text-white">My Projects</p>
      <div className="mx-auto grid h-full w-11/12 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((project: ProjectType) => (
          <ProjectItem
            key={project.$id}
            name={project.name}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
