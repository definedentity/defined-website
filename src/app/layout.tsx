import type { Metadata } from "next"
import { Oxanium } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

const oxanium = Oxanium({
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "DefinedEntity",
	description:
		"Defined Entity is a self taught web developer and Minecraft mod developer",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${oxanium.className} antialiased`}>{children}</body>
			<SpeedInsights/>
		</html>
	)
}
