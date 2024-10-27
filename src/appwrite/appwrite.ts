import { Client, Databases } from "appwrite"

const client = new Client()

client
	.setProject(process.env.APPWRITE_PROJECT_ID!)
	.setEndpoint(process.env.APPWRITE_ENDPOINT!)

export const db = new Databases(client)
