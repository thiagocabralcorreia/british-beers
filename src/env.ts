import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

// Validating the environment variables using the defined schema
// safeParse when you want to handle validation in a more controlled manner,
// providing error messages or fallback for the user without interrupting the application's flow.
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables",
    parsedEnv.error.flatten().fieldErrors // Details of validation errors
  );

  throw new Error("Invalid environment variables.");
}

export const env = parsedEnv.data;
