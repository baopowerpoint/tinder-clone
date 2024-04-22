import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string(),
  lastName : z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
