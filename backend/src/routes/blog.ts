import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>;

blogRouter.use("/*", async (c, next) => {
    await next();
});

blogRouter.post('/', async (c) => { 
    console.log("Reached the blog POST route");
    const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
    
        const body = await c.req.json();        
        
        try {
            const blog = await prisma.blog.create({
                data:{
                    authorId:body.authorId,
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

blogRouter.put('/', async (c) => { });

blogRouter.get('/',  async (c)=>{});

blogRouter.get('/bulk',  async (c)=>{});


