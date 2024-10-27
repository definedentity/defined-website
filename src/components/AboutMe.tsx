"use client"

import { addQuotes } from "@/app/utils/text-formatting"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function AboutMe() {
	return (
		<div className='w-full h-full'>
			<p className='text-white text-center text-3xl py-6'>About Me</p>
			<motion.div>
				<Card className='w-11/12 mx-auto h-full border border-white bg-black text-white'>
					<CardHeader>
						<CardTitle>About Me</CardTitle>
					</CardHeader>
					<CardContent>
						<p>{`- I'm Toby, my full name is ${addQuotes("Nguyen Minh Tho")}, known online as ${addQuotes("DefinedEntity")} or ${addQuotes("defined")}. I'm a self-taught web developer and Minecraft mod developer.`}</p>
						<p>{`- I'm currently studying at hight school (the final year).`}</p>
						<p>{`- I like gaming, anime, and watching films. My favourite games are Minecraft, Satisfactory, and Subnautica. For shows, I like How I Met Your Mother and Hannibal. Music-wise, I’m a fan of YOASOBI and J-Pop.`}</p>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	)
}
