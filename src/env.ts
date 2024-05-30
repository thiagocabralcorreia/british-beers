import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

// Validating the environment variables using the defined schema
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables",
    parsedEnv.error.flatten().fieldErrors // Details of validation errors
  );

  throw new Error("Invalid environment variables.");
}

export const env = parsedEnv.data;
