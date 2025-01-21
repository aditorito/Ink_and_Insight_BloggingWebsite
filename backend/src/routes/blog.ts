import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import { createblogInput, updateblogInput } from "@aditorito/medium-clone";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>;

blogRouter.use("/*", async (c, next) => {
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

blogRouter.post('/', async (c) => {
    console.log("Reached the blog POST route");
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const { success } = createblogInput.safeParse(body);

    if (!success) {
        c.status(411);
        return c.json({
            message: "Invalid Input"
        })

    }

    try {
        const blog = await prisma.blog.create({
            data: {
                authorId: Number(authorId),
                content: body.content,
                title: body.title
            }
        })

        return c.json({
            id: blog.id
        })

    } catch (error) {

        c.status(501);
        return c.text("Somthing went wrong")

    }
});

blogRouter.put('/', async (c) => {
    console.log("Reached the blog PUT route");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const { success } = updateblogInput.safeParse(body);

    if (!success) {
        c.status(411);
        return c.json({
            message: "Invalid Input"
        })

    }
    

    try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })

        return c.json({
            id: blog.id
        })

    } catch (error) {
        c.status(411);
        return c.text("Somthing went wrong")

    }

});

blogRouter.post('/:id', async (c) => {
    console.log("Reached the blog PUT route");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = await c.req.param("id");

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                id:true,
                title: true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })

        return c.json({
            blog
        })

    } catch (error) {
        c.status(411);
        return c.text("Somthing went wrong")

    }
});


blogRouter.put("/allposts", async (c) => {
    console.log("Reached the blog GET all route");

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blogs = await prisma.blog.findMany({
          select:{
            content:true,
            title:true,
            id: true,
            author:{
                select:{
                    name:true
                }
            }
          }
        });
        console.log("Fetched blogs:", blogs);

        return c.json({ blogs });
    } catch (error) {
        console.error("Error fetching all blogs:", error);
        c.status(500);
        return c.text("Something went wrong while fetching blogs.");
    }
})


