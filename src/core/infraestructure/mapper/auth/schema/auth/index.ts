import { z } from 'zod';

export const LoginSchema = z.object({
  token: z.string(),
});


export const RegisterSchema = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
})