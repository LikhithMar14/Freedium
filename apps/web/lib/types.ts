import { z } from "zod";

export type FormResponse = {
    message?: string;
    success?: boolean;
    data?: string;
    error?: {
      name?: string[];
      email?: string[];
      password?: string[];
    };
    redirect?: string
  };
  

export const SignupFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email." })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, {
      message: "Contain at least one letter.",
    })
    .regex(/[0-9]/, {
      message: "Contain at least one number.",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(1, {
      message: "Password field must not be empty.",
    }),
});

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  EDITOR = "EDITOR"
}