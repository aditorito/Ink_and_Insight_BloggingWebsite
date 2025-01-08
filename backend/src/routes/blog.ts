import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {  verify } from "hono/jwt";

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
    
    if( user ){
        c.set("userId", user.id );
        await next();
    }else {
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
        
        try {
            const blog = await prisma.blog.create({
                data:{
                    authorId:Number(authorId),
                    content:body.content,
                    title:body.title
                }
            })

            return c.json({
                id:blog.id
            })
            
        } catch (error) {
            c.status(411);
            return c.text("Somthing went wrong")
            
        }
});

blogRouter.put('/', async (c) => { 
    console.log("Reached the blog PUT route");
    const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
    
        const body = await c.req.json();        
        
        try {
            const blog = await prisma.blog.update({
                where:{
                    id:body.id
                },
                data:{
                    title:body.title,
                    content:body.content
                }
            })

            return c.json({
                id:blog.id
            })
            
        } catch (error) {
            c.status(411);
            return c.text("Somthing went wrong")
            
        }

});

blogRouter.get('/:id',  async (c)=>{
    console.log("Reached the blog PUT route");
    const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
    
        const id = await c.req.param("id");        
        
        try {
            const blog = await prisma.blog.findFirst({
                where:{
                    id:Number(id)
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

blogRouter.get('/bulk',  async (c)=>{
    console.log("Reached the blog PUT route");
    const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())    
        
        try {
            const blog = await prisma.blog.findMany({})

            return c.json({
                blogs:blog
            })
            
        } catch (error) {
            c.status(411);
            return c.text("Somthing went wrong")
            
        }
});


