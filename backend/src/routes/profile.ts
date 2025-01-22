import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";

export const profilRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>;

profilRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader, c.env.JWT_SECRET);
    console.log("inside use ");

    if (user) {
        c.set("userId", user.id);
        await next();
    } else {
        c.status(403);
        return c.json({
            message: "You are not logged In....!"
        })
    }
});


profilRouter.get("/", async (c) => {
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const id = c.get("userId")

    try {
        const user = await prisma.user.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                email: true,
                username: true,
                name: true,
                blogs: {
                    select:{
                        id:true,
                        title:true,
                        content:true
                    }
                }
            }
        })

        return c.json({
            user
        })

    } catch (error) {
        console.log(error);
        c.status(411);

    }
});