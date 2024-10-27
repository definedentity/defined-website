import AboutMe from "@/components/AboutMe"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MyProjectsContainer from "@/components/MyProjectsContainer"

export default function Home() {
	return (
		<div className='w-full h-full bg-black'>
			<Header />
			<AboutMe />
			<MyProjectsContainer />
			<Footer />
		</div>
	)
}
