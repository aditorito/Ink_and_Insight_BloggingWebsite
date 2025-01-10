import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    username: z.string().min(6),
    name: z.string().optional(),
    password: z.string().min(6)
})

export const signinInput = z.object({
    username: z.string().min(6),
    password: z.string().min(6)
})


export const createblogInput = z.object({
    title: z.string(),
    content: z.string()
})


export const updateblogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateblogInput = z.infer<typeof createblogInput>
export type updateblogInput = z.infer<typeof createblogInput>