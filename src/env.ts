import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

// Validating the environment variables using the defined schema
// safeParse when you want to handle validation in a more controlled manner,
// providing error messages or fallback for the user without interrupting the application's flow.
export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },

  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },

  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
});
