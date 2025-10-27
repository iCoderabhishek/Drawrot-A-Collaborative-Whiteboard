import {z} from "zod";

export const CreateUserSchema = z.object({
    email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address"),
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
    password: z.string(),
    name: z.string()
})

export const SigninSchema = z.object({
    email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address"),
    username: z.string().min(3).max(20),
    password: z.string(),
})

export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20),
})