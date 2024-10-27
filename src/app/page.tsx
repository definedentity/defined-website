import { AboutMe } from "@/components/about-me"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProjectContainer } from "@/components/project-container"

export default function Home() {
	return (
		<div className='w-full h-full bg-black'>
			<Header />
			<AboutMe />
			<ProjectContainer />
			<Footer />
		</div>
	)
}
