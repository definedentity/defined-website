import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    APPWRITE_PROJECT_ID: z.string(),
    APPWRITE_ENDPOINT: z.string(),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
    APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
