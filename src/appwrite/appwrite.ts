import { Client, Databases } from "appwrite";
import { env } from "~/env";

const client = new Client();

client
  .setProject(env.APPWRITE_PROJECT_ID)
  .setEndpoint(env.APPWRITE_ENDPOINT);

export const db = new Databases(client);
